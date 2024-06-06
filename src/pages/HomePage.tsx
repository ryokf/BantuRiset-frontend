import Button from '../components/Button';
import HomeTemplate from '../templates/HomeTemplate';
import { NavModal } from '../components/NavModal';
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
        <div className='mx-8 sm:mx-12 md:grid grid-cols-2 xl:mx-40 2xl:mx-48'>
            <div className="sm:max-w-md lg:max-w-full lg:my-20">
                <p className='text-primary mt-10 sm:text-lg md:text-base 2xl:text-xl'>#banturiset</p>
                <h1 className='text-3xl sm:text-4xl font-bold my-2 md:text-3xl lg:text-5xl 2xl:text-6xl lg:leading-snug 2xl:leading-relaxed lg:mb-4'>Wujudkan Inovasi, Majukan Negeri</h1>
                <p className='text-gray sm:text-lg mb-4 md:text-base lg:text-xl 2xl:text-2xl lg:font-light'>Membantu memajukan teknologi sekarang lebih mudah bersama kami </p>
                <Button className='lg:w-80'>Donasi Sekarang</Button>
            </div>
            <div className="my-10 w-full flex justify-center lg:justify-end items-center">
                <img src="./hero.png" alt="" className='sm:max-w-md 2xl:max-w-none md:w-64 lg:w-full 2xl:w-[35rem] aspect-square' />
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
        <div className='md:my-10'>
            <div className="max-w-xs lg:max-w-md m-auto">
                <h1 className='text-2xl lg:text-3xl text-center font-semibold'>Kategori</h1>
                <p className='text-gray text-center my-2 text-sm lg:text-lg'>Beberapa bidang penelitian yang sedang populer saat ini</p>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 m-auto md:w-11/12 lg:w-10/12 xl:w-2/3 gap-3 2xl:gap-0 p-4">
                {
                    category.map((item, index) => {
                        return (
                            <a href={item.link} key={item.link} className="w-full flex justify-center">
                                <div className={`w-20 lg:w-28 aspect-square text-white rounded-xl flex justify-center items-center ${color[index]}`}>
                                    <div className="flex flex-col items-center gap-1">
                                        {item.icon}
                                        <h1 className='text-xs lg:text-base font-medium'>{item.name}</h1>
                                    </div>
                                </div>
                            </a>
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
            <div className="max-w-xs lg:max-w-md m-auto ">
                <h1 className='text-2xl lg:text-3xl text-center font-semibold'>Riset Populer</h1>
                <p className='text-gray text-center my-2 text-sm lg:text-lg'>Riset yang diharapkan banyak orang untuk dijalankan</p>
            </div>
            <div className="w-11/12 2xl:w-10/12 m-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    [1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <div key={item} className="my-4 flex justify-center">
                                <Card></Card>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-full flex justify-center items-center mt-6 mb-12">
                <ButtonNav></ButtonNav>
            </div>
        </div>
    )
}

export default HomePage