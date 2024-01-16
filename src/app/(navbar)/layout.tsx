import Navbar from "@/components/navbar";

const NavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default NavbarLayout;
