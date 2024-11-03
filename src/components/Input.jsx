import React, {useId} from 'react'
import "./Input.css"
const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
  return (
    <div className='Input'>{label && <label htmlFor={id} className='Input-label'>{label}</label>}
    <input type={type} className='Input-type' ref={ref} {...props} id={id} /></div>
  )
})

export default Input;