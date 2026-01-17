// components/ContactForm.tsx
import React, { useState, FormEvent } from "react";

// Define interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define interface for validation errors
interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState<FormErrors>({});

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle input change
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

  // Set errors state first
  setErrors(validationErrors);

  // Stop here if there are validation errors
  if (Object.keys(validationErrors).length > 0) return;

  // Only run this if form is valid
  alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);

  // Reset form
  setFormData({ name: "", email: "", message: "" });
};


  return (
    <form
      className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md mx-auto mt-24"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="mb-4">
        <h1 className="font-semibold text-[2rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] text-center">Contact Me</h1>
        <label className="block text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-4 py-3 h-30 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <div className="flex justify-center mt-4">
      <button
        type="submit"
        className="bg-black text-white font-bold py-2 px-20 rounded hover:bg-gray-600 transition cursor-pointer"
      >
        Submit
      </button>
      </div>
    </form>
  );
}
