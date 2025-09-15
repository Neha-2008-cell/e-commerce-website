import FormikHOC from "./FormikHOC"


export default function Input({ label, id, type, placeholder, value, className , ...rest}) {
    
  

  
  return (
        <div>
         <label htmlFor={id} className="sr-only">
              {label}
            </label>
            <input
        className={className + "bg-gray-100 m-10 border border-solid border-gray rounded p-1 "  }
              id={id}
              value={value}
              type={type}
              placeholder={placeholder}
             {...rest}
      />
          
        </div>
    )
}

export const FormikInput = FormikHOC(Input)