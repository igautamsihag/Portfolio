import React, { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors: FormErrors = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required";
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) validationErrors.message = "Message is required";
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      className="w-full max-w-3xl bg-white rounded-xl shadow-md overflow-hidden mx-auto mt-24"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="p-8">
        <h1 className="font-semibold text-2xl sm:text-3xl text-center mb-8">Contact Me</h1>

        <div className="mb-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div className="mb-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 h-32 text-sm focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white text-sm font-semibold py-3 px-20 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
