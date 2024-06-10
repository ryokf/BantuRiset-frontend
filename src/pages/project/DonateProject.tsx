import React from 'react'

const DonateProject = () => {
    return (
        <div>
            <h1 className='text-2xl font-medium text-center my-4'>Kamu akan berdonasi</h1>
            <div className="w-10/12 grid grid-cols-3 m-auto overflow-hidden my-8 gap-4">
                <img src="https://flowbite.com/docs/images/blog/image-1.jpg" className='col-span-1 object-cover  aspect-square rounded-xl' alt="" />
                <div className="col-span-2">

                    <h1 className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit Vest.</h1>
                </div>
            </div>
            <InputAmount></InputAmount>
        </div>
    )
}

const InputAmount = () => {
    return (
        <div className="w-10/12 m-auto">
            <div className="flex flex-col">
                <label htmlFor="amount" className="text-sm font-medium">Jumlah</label>
                <input type="number" id="amount" className="w-full border border-gray rounded-lg p-2" />
            </div>
        </div>
    )
}

export default DonateProject