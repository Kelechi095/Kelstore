import { getCurrentUser } from "@/actions/getCurrentUser";
import Wrapper from "../components/Wrapper";
import ManageClient from "./ManageProductsClient";
import { getProducts } from "@/actions/getProducts";
import NotAllowed from "../components/NotAllowed";
import { Suspense } from "react";

const Admin = async () => {
  const products = await getProducts({ category: null });
  const currentUser = await getCurrentUser();

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <NotAllowed title="Oops! Access Denied" />;
  }

  return (
    <div className="pt-8">
      <Wrapper>
        <Suspense>
          <ManageClient products={products} />
        </Suspense>
      </Wrapper>
    </div>
  );
};

export default Admin;
