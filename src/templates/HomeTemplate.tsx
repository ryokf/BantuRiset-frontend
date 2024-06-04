import React from 'react'
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

const HomeTemplate = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
    </div>
  )
}

export default HomeTemplate