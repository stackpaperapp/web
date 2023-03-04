import Header from "./header";
import Footer from "./footer";
import type { ReactNode } from "react";
import { robotoRegular } from "../utils/fonts";
import Separator from "./separator";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="text-center px-4">
      <Header />
      <main className={robotoRegular.className}>{children}</main>
      <Separator />
      <Footer />
    </div>
  );
}
