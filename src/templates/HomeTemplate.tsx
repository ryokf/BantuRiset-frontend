import React from 'react'
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

const HomeTemplate = ({children} : {children: React.ReactNode}) => {
  return (
    // <div className='min-h-screen flex flex-col justify-between sm:bg-red-50 md:bg-blue-50 lg:bg-green-50 xl:bg-purple-50 2xl:bg-orange-50'>
    <div className='min-h-screen flex flex-col justify-between'>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    </div>
  )
}

export default HomeTemplate