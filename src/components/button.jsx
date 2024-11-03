import React from "react";
import "./button.css";
export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "Button",
    ...props
}) {
    return (
        <button className={`${bgColor} ${textColor} ${className} button`} {...props}>
            {children}
        </button>
    );
}