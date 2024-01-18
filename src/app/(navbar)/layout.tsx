import Navbar from "@/components/navbar";
import { cookies } from "next/headers";

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
  const token = cookies()?.get("token")?.value;
  return (
    <div>
      <Navbar token={token} />
      {children}
    </div>
  );
};

export default NavbarLayout;
