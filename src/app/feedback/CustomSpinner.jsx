import React from 'react';

const CustomSpinner = () => {
  return (
    <div className="spinner">
      <style jsx>{`
        .spinner {
          width: 20px; /* Spinner boyutunu küçülttüm */
          height: 20px;
          border: 3px solid rgba(0, 0, 0, 0.1);
          border-top-color: #000;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: auto; /* Spinner'ı ortalamak için auto margin */
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
export default CustomSpinner;