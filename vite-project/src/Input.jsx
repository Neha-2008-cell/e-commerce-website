import FormikHOC from "./FormikHOC"


export default function Input({ label, id, type, placeholder, value, className,touched,error , ...rest}) {
    
  

  
  return (
        <div>
         <label htmlFor={id} className="sr-only">
              {label}
            </label>
            <input
        className={className   }
              id={id}
              value={value || ""}
              type={type}
              placeholder={placeholder}
             {...rest}
      />
          {touched && error && <div className="text-red-800">{error}</div>}
          
        </div>
    )
}

export const FormikInput = FormikHOC(Input)