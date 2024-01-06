"use client";

import { Product } from "prisma/prisma-client";
import React, { useCallback } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { formatPrice } from "../utils/formatPrice";
import Heading from "../components/Heading";
import Status from "../components/Status";
import { MdDone, MdClose, MdCached, MdDelete, MdRemove } from "react-icons/md";
import ActionBtn from "../components/ActionBtn";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface ManageProductsClientProps {
  products: Product[] | null;
}

const ManageProductsClient = ({ products }: ManageProductsClientProps) => {
  let rows: any = [];

  const router = useRouter();

  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrice(product.price),
        category: product.category,
        brand: product.brand,
        inStock: product.inStock,
        image: product.image,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "name", headerName: "Name", width: 220 },
    {
      field: "price",
      headerName: "Price(USD)",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">{params.row.price}</div>
        );
      },
    },
    { field: "category", headerName: "Category", width: 100 },
    { field: "brand", headerName: "Brand", width: 100 },
    {
      field: "inStock",
      headerName: "InStock",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">
            {params.row.inStock === true ? (
              <Status
                text="In Stock"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <Status
                text="In Stock"
                icon={MdClose}
                bg="bg-rose-200"
                color="text-rose-700"
              />
            )}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex gap-4 w-full">
            <ActionBtn
              icon={MdCached}
              onClick={() =>
                handleToggleStock(params.row.id, params.row.inStock)
              }
            />
            <ActionBtn icon={MdDelete} onClick={() => handleDeleteStock(params.row.id)} />
          </div>
        );
      },
    },
  ];

  const handleToggleStock = useCallback(
    async (id: string, inStock: boolean) => {
      try {
        await axios.put("api/product", {
          id,
          inStock: !inStock,
        });

        toast.success("Product status changed");
        router.refresh();
      } catch (err) {
        toast.error("Something went wrong");
        console.log(err);
      }
    },
    [router]
  );

  const handleDeleteStock = useCallback(
    async (id: string) => {
      try {
        await axios.delete(`api/product/${id}`);

        toast.success("Product deleted");
        router.refresh();
      } catch (err) {
        toast.error("Something went wrong");
        console.log(err);
      }
    },
    [router]
  );

  return (
    <div className="max-w-[1150px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Manage Products" />
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default ManageProductsClient;
