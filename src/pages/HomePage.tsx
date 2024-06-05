import React from 'react'
import Button from '../components/Button';
import HomeTemplate from '../templates/HomeTemplate';
import { NavModal } from '../components/NavModal';

const HomePage = () => {
    return (
        <HomeTemplate>
            <NavModal></NavModal>
            <Hero></Hero>
            <Category></Category>
        </HomeTemplate>
    )
}

const Hero = () => {
    return (
        <div className='mx-8 min-h-screen'>
            <p className='text-primary mt-10'>#banturiset</p>
            <h1 className='text-3xl font-bold my-2'>Wujudkan Inovasi, Majukan Negeri</h1>
            <p className='text-gray mb-4'>Membantu memajukan teknologi sekarang lebih mudah bersama kami </p>
            <Button>Donasi Sekarang</Button>
            <div className="my-10">
                <img src="./hero.png" alt="" />
            </div>
        </div>
    )
}

const Category = () => {
    return (
        <div>
            <h1 className=''>Kategori</h1>
        </div>
    )
}

export default HomePage