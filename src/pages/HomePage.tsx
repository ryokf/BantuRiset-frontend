import React from 'react'
import { Card } from '../components/Card';
import ButtonNav from '../components/ButtonNav';
import { Button } from 'flowbite-react';
import Navbar from '../components/Navbar';
import HomeTemplate from '../templates/HomeTemplate';

const HomePage = () => {
    return (
        <HomeTemplate>
            <Hero></Hero>
        </HomeTemplate>
    )
}

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-bold'>Selamat Datang</h1>
            <h1 className='text-3xl font-bold'>di Bantur Iset</h1>
        </div>
    )
}

export default HomePage