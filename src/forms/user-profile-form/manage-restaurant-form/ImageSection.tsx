import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
    const { control, watch } = useFormContext();

    const existingImageUrl = watch("imageUrl");
    const imageFile = watch("imageFile");

    const [previewUrl, setPreviewUrl] = useState<string | null>(existingImageUrl || null);

    useEffect(() => {
        if (imageFile instanceof File) {
            const objectUrl = URL.createObjectURL(imageFile);
            setPreviewUrl(objectUrl);

            return () => URL.revokeObjectURL(objectUrl); // Cleanup memory
        }
    }, [imageFile]);

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Images</h2>
                <FormDescription>
                    Add an image that will be displayed on your restaurant listing in the search results. 
                    Adding a new image will overwrite the existing one.
                </FormDescription>
            </div>

            <div className="flex flex-col gap-8 md:w-[50%]">
                {/* ✅ Use previewUrl instead of existingImageUrl */}
                {previewUrl && (
                    <AspectRatio ratio={16 / 9}>
                        <img src={previewUrl} className="rounded-md object-cover h-full w-full" alt="Preview" />
                    </AspectRatio>
                )}
                <FormField 
    control={control} 
    name="imageFile" 
    render={({ field }) => (
        <FormItem>
            <FormControl>
                <Input 
                    className="bg-white" 
                    type="file" 
                    accept=".jpg, .jpeg, .png" 
                    onChange={(event) => {
                        const file = event.target.files?.[0] || null;
                        field.onChange(file);
                        if (file) {
                            const objectUrl = URL.createObjectURL(file);
                            setPreviewUrl(objectUrl);
                        } else {
                            setPreviewUrl(null);
                        }
                    }} 
                />
            </FormControl>
            <FormMessage />
        </FormItem>
    )}
/>

            </div>
        </div>
    );
};

export default ImageSection;
