"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';
import dynamic from 'next/dynamic';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../firebase/clientApp';

const ToastContainer = dynamic(() => import('react-toastify').then(mod => mod.ToastContainer), { ssr: false });
import CustomSpinner from './CustomSpinner';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'next-view-transitions';

interface FormData {
  userName: string;
  email: string;
  header: string;
  message: string;
}

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    userName: '',
    email: '',
    header: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
  
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
      // Firestore'a veri ekle
      const docRef = await addDoc(collection(db, "feedback"), {
        userName: formData.userName,
        email: formData.email,
        header: formData.header,
        message: formData.message,
        timestamp: new Date() // Veriye zaman damgası eklemek isterseniz
      });
  
      console.log("Document written with ID: ", docRef.id);
  
      toast.success('Form submitted successfully!', {
        position: "top-right",
        autoClose: 3000,
      });
  
    } catch (error) {
      console.error("Error adding document: ", error);
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
      <h2 className="text-xl font-bold text-slate-600">Please Send Us Your Feedback :)</h2>
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

      <button type="submit" disabled={isLoading} className="bg-slate-100 text-black rounded-md w-40 h-9 font-bold text-lg border-2 border-slate-600">
        {isLoading ? <CustomSpinner /> : 'Submit'}
      </button>
      <Link href ="/ShowDataPage" className="rounded-md border-2 border-slate-600 bg-slate-100 text-xl font-bold h-9 transition ease-in-out delay-150 w-40 text-center hover:-translate-y-1 hover:scale-110 hover: duration-300 ...">All Feedbacks</Link>
      <div style={{ zIndex: 200, position: 'relative' }}>
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