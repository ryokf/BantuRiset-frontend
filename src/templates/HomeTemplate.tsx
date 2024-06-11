import React from 'react'

const HomeTemplate = ({children, className} : {children: React.ReactNode, className?: string}) => {
  return (
    // <div className='min-h-screen flex flex-col justify-between sm:bg-red-50 md:bg-blue-50 lg:bg-green-50 xl:bg-purple-50 2xl:bg-orange-50'>
    <div className={`min-h-screen flex flex-col justify-start w-full ${className}`}>
        {children}
    </div>
  )
}

export default HomeTemplate