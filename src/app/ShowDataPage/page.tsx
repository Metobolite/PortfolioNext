"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from '../../../firebase/clientApp';
import dynamic from 'next/dynamic';
const ToastContainer = dynamic(() => import('react-toastify').then(mod => mod.ToastContainer), { ssr: false });
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface FormData {
  userName: string;
  email: string;
  header: string;
  message: string;
  id: string;
}

export default function ShowDataPage() {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);
  const [userFormData, setUserFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "feedback"));
        const dataList: FormData[] = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ ...doc.data(), id: doc.id } as FormData);
        });
        setFormDataList(dataList);

        const savedUserFormData = localStorage.getItem('userFormData');
        if (savedUserFormData) {
          const parsedData = JSON.parse(savedUserFormData) as FormData;
          const userDataWithId = dataList.find(data => data.email === parsedData.email);
          if (userDataWithId) {
            setUserFormData(userDataWithId);
            localStorage.setItem('userFormData', JSON.stringify(userDataWithId));
          } else {
            setUserFormData(parsedData);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (userFormData) {
      setUserFormData({
        ...userFormData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = async () => {
    if (userFormData && userFormData.id) {
      try {
        const docRef = doc(db, "feedback", userFormData.id);
        await updateDoc(docRef, {
          userName: userFormData.userName,
          email: userFormData.email,
          header: userFormData.header,
          message: userFormData.message,
        });
        toast.success('Feedback updated successfully!', {
          position: "top-right",
          autoClose: 3000,
        });

        setFormDataList((prevList) =>
          prevList.map((item) =>
            item.id === userFormData.id ? userFormData : item
          )
        );
        setIsEditing(false);
        localStorage.setItem('userFormData', JSON.stringify(userFormData));
      } catch (error) {
        console.error("Error updating document: ", error);
        toast.error('An error occurred. Please try again.', {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  const handleDelete = async () => {
    if (userFormData && userFormData.id) {
      try {
        const docRef = doc(db, "feedback", userFormData.id);
        await deleteDoc(docRef);
        localStorage.removeItem('userFormData');
        setUserFormData(null);

        setFormDataList((prevList) =>
          prevList.filter((item) => item.id !== userFormData.id)
        );

        toast.success('Feedback deleted successfully!', {
          position: "top-right",
          autoClose: 3000,
        });
      } catch (error) {
        console.error("Error deleting document: ", error);
        toast.error('An error occurred. Please try again.', {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center pt-40 pb-40 gap-4 min-h-screen">
      <h2 className="text-xl text-center font-bold text-green-800">
        Thank you for your feedback!
        <br />
        <br />
        You can change your feedback in the form below.
      </h2>

      {userFormData && (
        <div className="border-2 border-slate-500 rounded-lg p-4 mb-4 w-96 items-center flex flex-col">
          {isEditing ? (
            <>
              <input
                type="text"
                name="userName"
                placeholder=" Edit Your Name"
                value={userFormData.userName}
                onChange={handleEditChange}
                className="rounded-lg border-slate-600 border-2 w-96 h-9 mb-2 ml-5"
              />
              <input
                type="text"
                name="email"
                placeholder=" Edit Your Email (Optional)"
                value={userFormData.email}
                onChange={handleEditChange}
                className="rounded-lg border-slate-600 border-2 w-96 h-9 mb-2 ml-5"
              />
              <input
                type="text"
                name="header"
                placeholder=" Edit Your Header"
                value={userFormData.header}
                onChange={handleEditChange}
                className="rounded-lg border-slate-600 border-2 w-96 h-9 mb-2 ml-5"
              />
              <textarea
                name="message"
                placeholder=" Edit Your Message"
                value={userFormData.message}
                onChange={handleEditChange}
                className="rounded-lg border-slate-600 border-2 h-60 w-96 p-2 mb-2 ml-5"
              ></textarea>
              <button onClick={handleSave} className="bg-green-700 text-white rounded-md w-32 h-9">
                Save
              </button>
            </>
          ) : (
            <>
              <p className="flex flex-col items-center"><strong>Name</strong> {userFormData.userName}</p>
              <p className="flex flex-col items-center"><strong>Header</strong> {userFormData.header}</p>
            </>
          )}
          <div className=" pt-3 gap-1 items-center flex flex-row">
            <button onClick={() => setIsEditing(!isEditing)} className="bg-slate-500 text-white rounded-md w-32 h-9">
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
            <button onClick={handleDelete} className="bg-red-700 text-white rounded-md w-32 h-9">
              Delete
            </button>
          </div>
        </div>
      )}

      <div>
        <p className="text-xl text-center font-bold text-green-800">Other Feedbacks</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {formDataList.map((formData, index) => (
          <div key={index} className="border-2 gap-2 items-center flex flex-col border-stone-700 rounded-lg p-2 md:p-4 mb-4 w-96">
            <p className="font-bold">{formData.userName}</p>
            <p className="italic">{formData.header}</p>
            <p>{formData.message}</p>
          </div>
        ))}
      </Suspense>
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
    </div>
  );
}
