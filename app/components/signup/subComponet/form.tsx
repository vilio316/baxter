"use client";

import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import EmailInput from "./emailInput";
import UsernameInput from "./usernameInput";
import PasswordInput from "./passwordInput";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password || !email) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        toast.error("User already exists.");
        setLoading(false); // Stop loading
        return;
      }

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();

        router.push("/stock");

        toast.success("Account Created successfully!");
      } else {
        toast.error("Registration failed. Try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error during registration:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <EmailInput email={email} setEmail={setEmail} />
        <UsernameInput username={username} setUsername={setUsername} />
        <PasswordInput
          password={password}
          showPassword={showPassword}
          setPassword={setPassword}
          setShowPassword={setShowPassword}
        />

        <input
          value={loading ? "Creating Account..." : "Sign up"}
          type="submit"
          className="w-full bg-[#40ff47] text-black font-semibold py-2 rounded-full hover:bg-[#32e93a] transition"
          disabled={loading}
        />
      </form>
    </>
  );
}
