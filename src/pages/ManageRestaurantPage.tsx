import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
    const { createRestaurant, isPending: isCreateLoading } = useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();
    const { updateRestaurant, isPending: isUpdateLoading } = useUpdateRestaurant();

    const isEditing = !!restaurant;
    const isLoading = isCreateLoading || isUpdateLoading;

    return (
        <ManageRestaurantForm
            restaurant={restaurant}
            onSave={isEditing ? updateRestaurant : createRestaurant}
            isPending={isLoading}
        />
    );
};

export default ManageRestaurantPage;
