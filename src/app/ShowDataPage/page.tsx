"use client";
import React, { useEffect, useState } from 'react';

interface FormData {
  userName: string;
  email: string;
  header: string;
  message: string;
}

export default function ShowDataPage() {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/submit'); // API route'unu çağır
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFormDataList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

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