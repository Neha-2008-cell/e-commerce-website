import React from "react";
import { useField } from "formik";
export default function FormikHOC(IncomingComponent) {
    return function ({ name, label, ...rest }) {
        const field = useField(name)
          
        const [data, meta] = field
        
        const { value, onBlur, onChange } = data
        const { error, touched } = meta
        
          
        return (
            <div>
                <label htmlFor={name} className="sr-only">
                    {label}
                </label>
                <input
                    className="text-white p-5 pl-12 m-1 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
                    name={name}
                    id={name}
                    value={value}
                    {...rest}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {touched && error && <div className="text-red-800">{error}</div>}
            </div>
        )
    }
}