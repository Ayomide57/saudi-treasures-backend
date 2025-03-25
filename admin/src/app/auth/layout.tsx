
function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black p-20 h-full">
      <div style={{ width: "-webkit-fill-available" }}>{children}</div>
    </div>
  );
}

export default AuthLayout;
