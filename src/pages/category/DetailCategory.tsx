import HomeTemplate from '../../templates/HomeTemplate'
import category from '../../data/category';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card';
import Navbar from '../../components/Navbar';
import { Footer } from '../../components/Footer';

interface ICategory {
    id: number | undefined
    name: string
    desc: string
    icon: JSX.Element
}

const DetailCategory = () => {
    const paramId = useParams().id

    const categoryData = category.filter((item: ICategory) => item.id == paramId)

    return (
        <HomeTemplate>
            <Navbar></Navbar>
            <div className="lg:mx-10">
                <div className="grid grid-cols-1 md:grid-cols-3 md:w-3/4 lg:mx-20">
                    <div className="w-full flex justify-center">
                        <div className="w-40 my-10 text-primary">
                            {categoryData[0].icon}
                        </div>
                    </div>
                    <div className="mx-6 md:flex md:col-span-2 flex-col justify-center items-start">
                        <h1 className="text-2xl font-bold">{categoryData[0].name}</h1>
                        <p className='text-gray'>{categoryData[0].desc}</p>
                    </div>
                </div>
                <div className="w-11/12 md:my-10 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 sm:gap-4">
                    {
                        [1, 2, 3, 4, 5, 6].map((item) => {
                            return (
                                <div key={item} className="my-6 md:my-2 flex justify-center">
                                    <Card></Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </HomeTemplate>
    )
}

export default DetailCategory