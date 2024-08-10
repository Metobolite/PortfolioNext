"use client"
import React, { useState, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner } from '@chakra-ui/react';

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    header: '',
    message: '',
  });

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    
    // Form alanlarını kontrol et
    const hasEmptyFields = !formData.userName || !formData.header || !formData.message;

    if (hasEmptyFields) {
      setIsLoading(false);
      toast.error('All fields are required except email.', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      console.log(data);

      toast.success('Form submitted successfully!', {
        position: "top-right",
        autoClose: 3000,
      });

    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center pt-36 gap-8">
      <h2 className="text-xl font-bold text-green-800">Feedback</h2>
      <input
        type="text"
        name="userName"
        className="rounded-lg border-slate-600 border-2 w-96 h-9"
        onChange={handleChange}
        value={formData.userName}
        placeholder=" Enter Your Name"
      />
      <input
        type="text"
        name="email"
        className="rounded-lg border-slate-600 border-2 w-96 h-9"
        onChange={handleChange}
        value={formData.email}
        placeholder=" Enter Your Email (Optional)"
      />
      <input
        type="text"
        name="header"
        className="rounded-lg border-slate-600 border-2 w-96 h-9"
        onChange={handleChange}
        value={formData.header}
        placeholder=" Enter Your Header"
      />
      <textarea
        name="message"
        className="rounded-lg border-slate-600 border-2 h-60 w-96 p-2"
        onChange={handleChange}
        value={formData.message}
        placeholder=" Enter Your Message"
      ></textarea>

      <button type="submit" disabled={isLoading} className="bg-slate-100 text-black rounded-md w-40 h-9 mb-20 font-bold text-lg border-2 border-slate-600">
        {isLoading ? <Spinner /> : 'Submit'}
      </button>
      <div style={{ zIndex: 9999, position: 'relative' }}>
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </form>
  );
}