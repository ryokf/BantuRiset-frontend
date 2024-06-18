import ButtonBadge from '../../components/ButtonBadge';
import { Card } from '../../components/Card';
import DashboardTemplate from '../../templates/DashboardTemplate';
const DonaturProject = () => {
    return (
        <DashboardTemplate title="Proyek">
            <div className="my-4 mx-6 ">
                <h1 className='font-medium text-xl mb-2'>Proyek yang anda danai</h1>
                <p className='text-gray text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem unde</p>
            </div>
            <div className="flex mx-6 gap-2">
                <ButtonBadge title='Semua'></ButtonBadge>
                <ButtonBadge title='berhasil' isTrue={false}></ButtonBadge>
                <ButtonBadge title='gagal' isTrue={false}></ButtonBadge>
            </div>
            <div className="my-4 mx-6 grid grid-cols-1 gap-4">
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div className="h-20"></div>
        </DashboardTemplate>
    )
}

export default DonaturProject