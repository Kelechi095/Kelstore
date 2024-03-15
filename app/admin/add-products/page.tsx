import React, { Suspense } from "react";
import Wrapper from "@/app/components/Wrapper";
import FormWrapper from "@/app/components/FormWrapper";
import AddProductForm from "./AddProductForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NotAllowed from "@/app/components/NotAllowed";

const AddProducts = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NotAllowed title="Oops! Access Denied" />;
  }

  return (
    <Suspense>
      <div className="p-1">
        <Wrapper>
          <FormWrapper>
            <AddProductForm />
          </FormWrapper>
        </Wrapper>
      </div>
    </Suspense>
  );
};

export default AddProducts;
