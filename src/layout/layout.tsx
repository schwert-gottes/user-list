import { Header } from ".";
import type { LayoutProps } from "@/types/user";

const Layout = async ({ children }: LayoutProps) => {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between bg-gray-100">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
