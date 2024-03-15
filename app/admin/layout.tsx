import { Suspense } from "react";
import AdminNav from "../components/admin/AdminNav";
import Loading from "../loading";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div>
      <AdminNav />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default AdminLayout;
