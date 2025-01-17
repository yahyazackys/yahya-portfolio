import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

export const metadata = {
  title: "Yahya Portfolio",
};

const Layout = ({ children }) => {
  return (
    <div
      className={`w-full h-screen overflow-hidden bg-site text-white bg-cover bg-no-repeat ${sora.variable}`}
    >
      <TopLeftImg />
      <Nav />
      <Header /> {children}
    </div>
  );
};

export default Layout;
