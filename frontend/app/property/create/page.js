"use client";
import { useState } from "react";
import { createProperty } from "../../../services/propertyService";
import { useRouter } from "next/navigation";

export default function CreateProperty() {
  const [form, setForm] = useState({});
  const router = useRouter();

  const submit = async (e) => {
    e.preventDefault();
    await createProperty(form);
    router.push("/dashboard/host");
  };

  return (
    <form className="form" onSubmit={submit}>
      <h2>Create Property</h2>
      <input placeholder="Title" onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Location" onChange={(e) => setForm({ ...form, location: e.target.value })} />
      <input placeholder="Price" type="number"
        onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <textarea placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <button>Create</button>
    </form>
  );
}
