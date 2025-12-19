"use client";
import { useState } from "react";
import { registerUser } from "../../../services/authService";
import { useAuth } from "../../../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [form, setForm] = useState({});
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await registerUser(form);
    login(data);
    router.push("/");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />

      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="USER">User</option>
        <option value="HOST">Host</option>
      </select>

      <button>Create Account</button>
    </form>
  );
}
