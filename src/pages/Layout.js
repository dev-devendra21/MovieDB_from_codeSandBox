import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import useWindowScreen from "../hooks/useWindowScreen";

export default function Layout() {
  const { width } = useWindowScreen();
  return (
    <>
      <Header />
      <Outlet />
      {width < 768 && <Footer />}
    </>
  );
}
