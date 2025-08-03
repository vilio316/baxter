import { signIn, signOut, useSession } from "next-auth/react";

export default function StockNav() {
  const { data: session } = useSession();

  return (
    <nav className="stock-nav">
      {/* ...existing navigation items... */}
      {session ? (
        <button onClick={() => signOut()} className="btn-secondary">
          Logout
        </button>
      ) : (
        <button onClick={() => signIn()} className="btn-primary">
          Login
        </button>
      )}
    </nav>
  );
}
