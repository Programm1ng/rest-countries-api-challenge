import { FunctionComponent, ReactNode, Dispatch, SetStateAction } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface ILayoutProps {
  children: ReactNode;
  isDarkMode: Boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children, isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
