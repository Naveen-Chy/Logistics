import type { ReactNode } from "react";
import Footer  from "./Footer";
import Header  from "./Header";
import TopHeader  from "./Navbar";

interface LayoutWrapperProps {
  children: ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
