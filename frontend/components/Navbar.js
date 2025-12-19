"use client";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link href="/">Airbnb</Link>

      <div>
        {user ? (
          <>
            {user.user.role === "HOST" && (
              <Link href="/dashboard/host">Host Dashboard</Link>
            )}
            <Link href="/dashboard/user">My Trips</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
