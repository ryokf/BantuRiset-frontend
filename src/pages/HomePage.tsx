import React from 'react'
import Button from '../components/Button';
import HomeTemplate from '../templates/HomeTemplate';
import { NavModal } from '../components/NavModal';

const HomePage = () => {
    return (
        <HomeTemplate>
            <Hero></Hero>
        </HomeTemplate>
    )
}

const Hero = () => {
    return (
        <div className='mx-8'>
            <p className='text-primary'>#banturiset</p>
            <h1 className='text-3xl font-bold my-2'>Wujudkan Inovasi, Majukan Negeri</h1>
            <p className='text-gray mb-4'>Membantu memajukan teknologi sekarang lebih mudah bersama kami </p>
            <Button>Donasi Sekarang</Button>
            <NavModal></NavModal>
        </div>
    )
}

export default HomePage