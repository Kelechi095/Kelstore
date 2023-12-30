"use client";

import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import CheckBox from "@/app/components/inputs/CheckBox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import { categories } from "@/app/utils/categories";
import React, { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import { toast } from "react-hot-toast";
import ImageUpload from "@/app/components/inputs/ImageUpload";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      image: "",
      category: "",
      inStock: "",
      price: "",
    },
  });

  const setCustomValue = useCallback(
    (id: string, value: any) => {
      setValue(id, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [setValue]
  );

  const router = useRouter()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      if (!data.category) {
        setIsLoading(false);
        return toast.error("Category is not selected");
      }

      if (!data.image) {
        setIsLoading(false);
        return toast.error("No selected image!");
      }

      await axios.post("/api/product", data);
      toast.success("Product created");
      reset()
      router.refresh()
      setIsLoading(false);
    } catch (err) {
      toast.error("Something went wrong");
      setIsLoading(false);
    }

    console.log(data);
    reset();
  };

  const category = watch("category");
  const image = watch("image");

  return (
    <>
      <Heading title="Add a Product" center />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />
      <Input
        id="brand"
        label="Brand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CheckBox id="inStock" register={register} label="Product in stock?" />
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Select a Category</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {categories.map((item) => {
            if (item.label === "All") {
              return null;
            }
            return (
              <div key={item.label} className="col-span">
                <CategoryInput
                  onClick={(category) => setCustomValue("category", category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div>
          <div className="font-bold">Select an image for the product</div>

          <ImageUpload
            onChange={(value) => setCustomValue("image", value)}
            value={image}
          />
        </div>
      </div>
      <Button
        label={isLoading ? "Loading" : "Add Product"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default AddProductForm;
