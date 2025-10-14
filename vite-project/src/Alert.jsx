import React, { useEffect } from "react";
import { withAlert } from "./withProvider";

function Alert({ alert , removeAlert}) {
  useEffect(
    () => {
      if (alert) {
       const timeout = setTimeout(removeAlert, 3 * 1000)
        return () => clearTimeout( timeout )
      }
    }
    ,[alert])
  
  
  if (alert === null) {
    return;
  }

  const {message , type} = alert

  let className;
  if (type === "error") {
    className = "text-red-600"
  } else if (type === "success") {
    className = "text-green-600"
  }
  
  return (
        <>
        
        <div
  role="alert"
  className="rounded-md border border-gray-300 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800"
>
  <div className="flex items-start gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={"size-6 " + className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <div className="flex-1">

      <p className={"mt-0.5 text-sm font-semibold text-gray-700 " + className}>
       {message}
      </p>

    </div>

    <button
      className="-m-3 rounded-full p-1.5 text-gray-500 transition-colors self-center hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      type="button"
      onClick={removeAlert}
    >
      Dismiss

     
    </button>
  </div>
</div>

        </>
    )
}
export default withAlert(Alert) ;


