"use client";
import React, { useEffect, useState } from 'react';
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

        // Firebase'de güncellenen veriyi formDataList'e de yansıt
        setFormDataList((prevList) =>
          prevList.map((item) =>
            item.id === userFormData.id ? userFormData : item
          )
        );
        setIsEditing(false);
        localStorage.setItem('userFormData', JSON.stringify(userFormData)); // Güncellenmiş veriyi kaydet
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

        // Silinen veriyi formDataList'ten çıkar
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

  if (loading) {
    return (
      <div className="flex justify-center items-center pt-40 h-96">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-40 pb-40 gap-4">
      <h2 className="text-xl text-center font-bold text-green-800">
        Thank you for your feedback!
        <br />
        <br />
        You can change your feedback in the form below.
      </h2>

      {userFormData && (
        <div className="border-2 border-blue-500 rounded-lg p-4 mb-4 w-96">
          {isEditing ? (
            <>
              <input
                type="text"
                name="userName"
                value={userFormData.userName}
                onChange={handleEditChange}
                className="rounded-lg border-slate-600 border-2 w-96 h-9 mb-2"
              />
              <input
                type="text"
                name="email"
                value={userFormData.email}
                onChange={handleEditChange}
                className="rounded-lg border-slate-600 border-2 w-96 h-9 mb-2"
              />
              <input
                type="text"
                name="header"
                value={userFormData.header}
                onChange={handleEditChange}
                className="rounded-lg border-slate-600 border-2 w-96 h-9 mb-2"
              />
              <textarea
                name="message"
                value={userFormData.message}
                onChange={handleEditChange}
                className="rounded-lg border-slate-600 border-2 h-60 w-96 p-2 mb-2"
              ></textarea>
              <button onClick={handleSave} className="bg-green-500 text-white rounded-md w-32 h-9 mb-2">
                Save
              </button>
            </>
          ) : (
            <>
              <p><strong>Name: </strong> {userFormData.userName}</p>
              <p><strong>Email: </strong> {userFormData.email}</p>
              <p><strong>Header: </strong> {userFormData.header}</p>
              <p><strong>Message: </strong> {userFormData.message}</p>
            </>
          )}
          <button onClick={() => setIsEditing(!isEditing)} className="bg-blue-500 text-white rounded-md w-32 h-9 mb-2">
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white rounded-md w-32 h-9">
            Delete
          </button>
        </div>
      )}

      <div>
        <p className="text-xl text-center font-bold text-green-800">Other Feedbacks</p>
      </div>
      {formDataList.map((formData, index) => (
        <div key={index} className="border-2 border-green-500 rounded-lg p-4 mb-4 w-96">
          <p><strong>Name: </strong> {formData.userName}</p>
          <p><strong>Email: </strong> {formData.email}</p>
          <p><strong>Header: </strong> {formData.header}</p>
          <p><strong>Message: </strong> {formData.message}</p>
        </div>
      ))}
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