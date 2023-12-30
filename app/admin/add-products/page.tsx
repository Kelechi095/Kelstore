import React from "react";
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
    <div className="p-8">
      <Wrapper>
        <FormWrapper>
          <AddProductForm />
        </FormWrapper>
      </Wrapper>
    </div>
  );
};

export default AddProducts;
