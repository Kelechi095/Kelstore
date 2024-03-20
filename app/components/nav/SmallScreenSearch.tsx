"use client";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";


const SmallScreenSearch = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<FieldValues>({
      defaultValues: {
        searchTerm: "",
      },
    });
  
    const router = useRouter();
  
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      if (!data.searchTerm) return router.push("/");
  
      const url = qs.stringifyUrl(
        {
          url: "/",
          query: {
            searchTerm: data.searchTerm,
          },
        },
        { skipNull: true }
      );
  
      router.push(url);
      reset;
    };
  
  
  return (
    <div className=" w-full mx-auto mt-2 py-1 px-4 bg-white flex gap-2 items-center md:hidden">
      <form className="mx-auto flex">
        <input
        {...register("searchTerm")}
          type="text"
          className="outline-none w-full px-2 py-1 border border-slate-300"
          placeholder="Search Product"
        />
        <button className="bg-rose-400 text-white px-2 rounded"
        onClick={handleSubmit(onSubmit)}
        >Search</button>
      </form>
    </div>
  );
};

export default SmallScreenSearch;
