"use client";
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase/clientApp';

interface FormData {
  userName: string;
  email: string;
  header: string;
  message: string;
}

export default function ShowDataPage() {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "feedback"));
        const dataList: FormData[] = [];
        querySnapshot.forEach((doc) => {
          dataList.push(doc.data() as FormData);
        });
        setFormDataList(dataList);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center pt-40 h-96">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (formDataList.length === 0) {
    return <p className="pt-40">No data available</p>;
  }

  return (
    <div className="flex flex-col items-center pt-40 pb-40 gap-4">
      <h2 className="text-xl font-bold text-green-800">All Submitted Data</h2>
      {formDataList.map((formData, index) => (
        <div key={index} className="border-2 border-green-500 rounded-lg p-4 mb-4 w-96">
          <p><strong>Name: </strong> {formData.userName}</p>
          <p><strong>Email: </strong> {formData.email}</p>
          <p><strong>Header: </strong> {formData.header}</p>
          <p><strong>Message: </strong> {formData.message}</p>
        </div>
      ))}
    </div>
  );
}