import HomeTemplate from '../../templates/HomeTemplate'
import category from '../../data/category';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card';

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
            <div className="">
                <div className="w-full flex justify-center">
                    <div className="w-40 my-10 text-primary">
                        {categoryData[0].icon}
                    </div>
                </div>
                <div className="mx-6">
                    <h1 className="text-2xl font-bold">{categoryData[0].name}</h1>
                    <p className='text-gray'>{categoryData[0].desc}</p>
                </div>
                <div className="w-11/12 m-auto">
                {
                    [1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <div key={item} className="my-10 flex justify-center">
                                <Card></Card>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </HomeTemplate>
    )
}

export default DetailCategory