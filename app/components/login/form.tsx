import Link from "next/link";
export default function LoginForm({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-[#1A1F19] rounded-2xl shadow-xl w-full max-w-md mt-20 mb-20 p-8">
      <h2 className="text-3xl font-extrabold mb-2 text-center tracking-tight">
        Welcome back
      </h2>
      <p className="text-gray-400 text-center mb-8">
        Access your Baxter account.
      </p>

      {children}

      <p className="text-center text-sm text-gray-400 mt-8">
        Don’t have an account?
        <Link
          href="/signup"
          className="text-green-400 hover:underline font-medium"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
