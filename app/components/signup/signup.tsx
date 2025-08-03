import svg from "@/design_assets/SVG.png";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./subComponet/form";

export default function SignUpPage() {
  return (
    <div className="bg-[#1A1F19] rounded-2xl shadow-xl w-full max-w-md mt-20 mb-20 p-8">
      <div className="flex justify-center mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-black font-bold text-xl">
          <Image src={svg} alt="Baxter" />
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
        Create your Baxter account
      </h2>
      <p className="text-gray-400 text-center mb-6">
        Start your journey to financial literacy today.
      </p>

      <SignUpForm />

      <p className="text-center text-xs text-gray-200 mt-4">
        By signing up, you agree to our{" "}
        <Link href="/termsandcondition" className="text-green-500 underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-green-500 underline">
          Privacy Policy
        </Link>
        .
      </p>
      <p className="text-center text-sm text-gray-200 mt-3">
        Already have an account?{" "}
        <Link href="/login" className="text-green-500 hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
