import DefaultLayout from "@/components/Layouts/DefaultLayout";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-black ">
      <div style={{ width: "-webkit-fill-available" }}>
        <DefaultLayout>{children}</DefaultLayout>
      </div>
    </div>
  );
}

export default AdminLayout;
