import React, {useId} from 'react'
import "./Select.css"
function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='Select-form'>
        {label && <label htmlFor={id} className='Selct-form-label'>{`${label} :`}</label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`Select-form-l ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option} >
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)