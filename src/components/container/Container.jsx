import React from 'react'
import "./conatiner.css"
function Container({children}) {
  return (
    <div className="container"> 
      {children}
    </div>
  )
}

export default Container;
