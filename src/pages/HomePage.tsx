import React from 'react'
import Button from '../components/Button';
import HomeTemplate from '../templates/HomeTemplate';
import { NavModal } from '../components/NavModal';
import { FaBook } from 'react-icons/fa';
import category from '../services/category';
import { Card } from '../components/Card';
import ButtonNav from '../components/ButtonNav';

const HomePage = () => {
    return (
        <HomeTemplate>
            <NavModal></NavModal>
            <Hero></Hero>
            <hr className='border-4 mb-10 w-full' />
            <Category></Category>
            <hr className='border-4 my-10 w-full' />
            <Popular></Popular>
        </HomeTemplate>
    )
}

const Hero = () => {
    return (
        <div className='mx-8'>
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
                                        <FaBook></FaBook>
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
                    [1, 2, 3, 4, 5, 6].map((item, index) => {
                        return (
                            <div key={index} className="my-4">
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