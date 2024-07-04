import React from 'react'

type CardPropsType={
    children:React.ReactNode;
    className?: string;
}
const Card:React.FC<CardPropsType> = ({children,className}) => {
  return (
    <div className={`rounded-[30px] w-full px-5 py-[35px] bg-white ${className}`}>
        {children}
    </div>
  )
}

export default Card