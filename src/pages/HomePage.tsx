import React from 'react'
import Button from '../components/Button';
import HomeTemplate from '../templates/HomeTemplate';
import { NavModal } from '../components/NavModal';
import { FaBook } from 'react-icons/fa';
import category from '../data/category';
import { Card } from '../components/Card';
import ButtonNav from '../components/ButtonNav';

const HomePage = () => {
    return (
        <HomeTemplate>
            <NavModal></NavModal>
            <Hero></Hero>
            <hr className='border-4 mb-10 w-full md:hidden' />
            <Category></Category>
            <hr className='border-4 my-10 w-full' />
            <Popular></Popular>
        </HomeTemplate>
    )
}

const Hero = () => {
    return (
        <div className='mx-8 sm:mx-12 md:grid grid-cols-2 lg:mx-60'>
            <div className="sm:max-w-md lg:max-w-full lg:my-20">
                <p className='text-primary mt-10 sm:text-lg md:text-base lg:text-xl'>#banturiset</p>
                <h1 className='text-3xl sm:text-4xl font-bold my-2 md:text-3xl lg:text-6xl lg:leading-snug lg:mb-4'>Wujudkan Inovasi, Majukan Negeri</h1>
                <p className='text-gray sm:text-lg mb-4 md:text-base lg:text-2xl lg:font-light'>Membantu memajukan teknologi sekarang lebih mudah bersama kami </p>
                <Button>Donasi Sekarang</Button>
            </div>
            <div className="my-10 flex justify-center lg:justify-end">
                <img src="./hero.png" alt="" className='sm:max-w-md md:w-80 lg:w-full aspect-square' />
            </div>
        </div>
    )
}

const Category = () => {
    const color = [
        'gradient-red',
        'gradient-amber',
        'gradient-emerald',
        'gradient-cyan',
        'gradient-indigo',
        'gradient-purple',
        'gradient-pink',
        'gradient-orange',
    ]

    return (
        <div>
            <div className="max-w-xs m-auto">
                <h1 className='text-2xl text-center font-semibold'>Kategori</h1>
                <p className='text-gray text-center my-2 text-sm'>Beberapa bidang penelitian yang sedang populer saat ini</p>
            </div>
            <div className="grid grid-cols-4 gap-3 p-4">
                {
                    category.map((item, index) => {
                        return (
                            <div className="w-full flex justify-center">
                                <div key={index} className={`w-20 aspect-square text-white rounded-xl flex justify-center items-center ${color[index]}`}>
                                    <div className="flex flex-col items-center gap-1">
                                        {item.icon}
                                        <h1 className='text-xs font-medium'>{item.name}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-full flex justify-center items-center mt-4">
                <ButtonNav></ButtonNav>
            </div>
        </div>
    )
}

const Popular = () => {
    return (
        <div>
            <div className="max-w-xs m-auto">
                <h1 className='text-2xl text-center font-semibold'>Riset Populer</h1>
                <p className='text-gray text-center my-2 text-sm'>Riset yang diharapkan banyak orang untuk dijalankan</p>
            </div>
            <div className="mx-4 my-10">
                {
                    [1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <div key={item} className="my-4">
                                <Card></Card>
                            </div>
                        )
                    })
                }
                <div className="w-full flex justify-center items-center my-6 ">
                    <ButtonNav></ButtonNav>
                </div>
            </div>
        </div>
    )
}

export default HomePage