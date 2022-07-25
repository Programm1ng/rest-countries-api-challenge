import { FunctionComponent, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
