import Footer from "../components/footer";
import HomeNav from "../components/HomepageNav";
import LoginLayout from "../components/login/loginLayout";
import SignUpPage from "../components/signup/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baxter - Signup",
  description: "Sign up for Baxter to start your journey with us.",
};
export default function Signup() {
  return (
    <>
      <HomeNav />
      <LoginLayout>
        <SignUpPage />
      </LoginLayout>
      <Footer />
    </>
  );
}
