import React from "react";
import { ImSpinner10 } from "react-icons/im";
export default function Loading() {
    return (
       <div>
            <div className="text-6xl my-120 mx-150"><ImSpinner10 className="animate-spin" /></div>
       </div>
    )
}