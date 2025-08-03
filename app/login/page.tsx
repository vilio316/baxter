import Footer from "../components/footer";
import HomeNav from "../components/HomepageNav";
import LoginPage from "../components/login/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Baxter",
};

export default function Login() {
  return (
    <>
      <HomeNav />
      <LoginPage />
      <Footer />
    </>
  );
}
