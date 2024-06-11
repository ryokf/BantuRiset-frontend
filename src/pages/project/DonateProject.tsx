import { Label, Radio } from 'flowbite-react'
import paymentOptions from '../../data/paymentOptions'
import { Link } from 'react-router-dom'

const DonateProject = () => {
    return (
        <div className='bg-white-secondary min-h-screen'>
            <h1 className='text-2xl font-medium text-center pt-4 mb-4'>Kamu akan berdonasi</h1>
            <div className="w-10/12 grid grid-cols-3 m-auto overflow-hidden my-8 gap-4">
                <img src="https://flowbite.com/docs/images/blog/image-1.jpg" className='col-span-1 object-cover  aspect-square rounded-xl' alt="" />
                <div className="col-span-2">

                    <h1 className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit Vest.</h1>
                </div>
            </div>
            <InputAmount></InputAmount>
            <PaymentOptions></PaymentOptions>
            <Footer></Footer>
        </div>
    )
}

const InputAmount = () => {
    return (
        <div className="w-11/12 m-auto">
            <div className="flex flex-col bg-white px-4 py-5 rounded-xl">
                <label htmlFor="amount" className="text-sm font-medium mb-2">Masukkan nominal donasi</label>
                <input type="number" id="amount" className="w-full border border-gray rounded-lg p-2" placeholder='min Rp10.000'/>
            </div>
        </div>
    )
}

const PaymentOptions = () => {
    return (
        <div>
            <div className="w-11/12 m-auto my-4">
                <div className="flex flex-col bg-white px-4 py-5 rounded-xl">
                    <label htmlFor="amount" className="text-sm font-medium mb-2">Pilih metode pembayaran</label>
                    <fieldset className="flex max-w-md flex-col gap-4">
                        {
                            paymentOptions.map((item) => {
                                return (
                                    <Label htmlFor={item.name} key={item.id} className="flex items-center gap-2 border p-4 rounded-xl border-gray">
                                        <Radio id={item.name} name="countries" value={item.name} defaultChecked />
                                        <div>{item.name}</div>
                                    </Label>
                                )
                            })
                        }
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className='fixed border-2 bottom-0 bg-white w-full rounded-xl py-2'>
            <div className="mx-6">
                <Link to={"/donate"} className=''>
                    <div className="text-white py-2 border bg-primary w-full rounded-xl h-full flex justify-center items-center">Kirim Donasi</div>
                </Link>
            </div>
        </div>
    )
}


export default DonateProject