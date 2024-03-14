import AdminNav from "../components/admin/AdminNav"


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