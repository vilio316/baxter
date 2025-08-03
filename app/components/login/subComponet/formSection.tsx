"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import EmailInput from "./emailInput";
import PasswordInput from "./passwordInput";

export default function FormSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    setLoading(true); // Start loading

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      setLoading(false); // Stop loading

      if (!res || !res.ok) {
        toast.error(res?.error || "Invalid email or password");
        return;
      }

      toast.success("Login successful!");
      router.push("/stock");
    } catch (error) {
      setLoading(false);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <EmailInput inputedEmail={email} setEmail={setEmail} />
      <PasswordInput
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <input
        type="submit"
        value={loading ? "Logging in..." : "Log In"}
        disabled={loading}
        className={`w-full bg-[#53D22C] text-black font-bold py-2 rounded-full transition cursor-pointer ${
          loading
            ? "opacity-50 cursor-not-allowed"
            : "hover:from-[#32e93a] hover:to-[#40ff47]"
        }`}
      />
    </form>
  );
}
