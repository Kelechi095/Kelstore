import AdminNav from "../components/admin/AdminNav"


export const metaData = {
    title: "Kelstores Admin",
    description: " Kelstores Admin Dashboard"
}

interface AdminLayoutProps {
    children: React.ReactNode
}

const AdminLayout = ({children}: AdminLayoutProps) => {
  return (
    <div>
        <AdminNav />
        {children}
    </div>
  )
}

export default AdminLayout