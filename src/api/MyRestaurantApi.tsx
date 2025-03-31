import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyRestaurantRequest = async (): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        if(!response.ok) {
            throw new Error("Failed to get restaurant");
        }
        return response.json();
    };

    const { data: restaurant, isPending } = useQuery({ queryKey: ["fetchMyRestaurant"], queryFn: getMyRestaurantRequest });

    return{ restaurant, isPending };
};

export const useCreateMyRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyRestaurantRequest = async (restaurantFormData: FormData): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: restaurantFormData,
        });

        if(!response.ok) {
            throw new Error("Failed to create restaurant");
        }

        return response.json();
    };

    const mutation = useMutation ({ mutationFn: createMyRestaurantRequest,

    onSuccess: () => {
        toast.success("Restaurant created!");
    },

    onError: () => {
        toast.error("Unable to UPDATE restaurant");
    },
});

    return { createRestaurant: mutation.mutate, isPending: mutation.isPending };

};

export const useUpdateRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updatedRestaurantRequest = async (restaurantFormData: FormData): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: restaurantFormData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Update failed:', errorData);  
            throw new Error(errorData.message || "Failed to update Restaurant");
        }

        return response.json();
    };

    const updatedRestaurantMutation = useMutation({
        mutationFn: updatedRestaurantRequest,
        onSuccess: () => {
            toast.success("Restaurant updated successfully");
        },
        onError: (error: Error) => {
            toast.error(error.message || "UNABLE to update restaurant");
        },
    });

    const { mutate: updateRestaurant, isPending, error, isSuccess } = updatedRestaurantMutation;

    return { updateRestaurant, isPending, error, isSuccess };
};
