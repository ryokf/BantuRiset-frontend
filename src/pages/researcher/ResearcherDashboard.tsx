"use client";

import { Table } from "flowbite-react";
import DashboardTemplate from '../../templates/DashboardTemplate'
import ButtonNav from '../../components/ButtonNav';

const ResearcherDashboard = () => {
    return (
        <DashboardTemplate>
            <MainCard />
            <ProjectList />
        </DashboardTemplate>
    )
}

const MainCard = () => {
    return (
        <div className="w-11/12 m-auto gradient-emerald py-5 my-4 rounded-xl">
            <div className="flex items-center w-10/12 m-auto gap-4">
                <div className="">
                    <img src="" alt="" className='bg-gray w-16 rounded-full aspect-square' />
                </div>
                <div className="text-white">
                    <h1 className='font-medium'>Ryo khrisna fitriawan</h1>
                    <p className='text-sm opacity-75'>ryokhrisnaf@gmail.com</p>
                </div>
            </div>
            <div className="grid grid-cols-3 mt-4 mx-4 text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className='text-xs'>donasi</p>
                    <h1 className='text-sm'>Rp15.000.000</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className='text-xs'>berhasil</p>
                    <h1 className='text-sm'>32</h1>
                </div>
                <div className="flex flex-col items-center">
                    <p className='text-xs'>gagal</p>
                    <h1 className='text-sm'>2</h1>
                </div>
            </div>
        </div>
    )
}



export function ProjectList() {
    return (
        <div className=" w-11/12 m-auto !my-0">
            <h1 className="my-2 font-medium text-lg">Proyek Anda</h1>
            <div className="overflow-x-auto shadow !rounded-xl">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Judul</Table.HeadCell>
                        <Table.HeadCell>Dana dibutuhkan</Table.HeadCell>
                        <Table.HeadCell>Dana didapat</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>{""}</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'lorem ipsum dolot sit amet'}
                            </Table.Cell>
                            <Table.Cell>Rp10.000.000</Table.Cell>
                            <Table.Cell>Rp6.000.000</Table.Cell>
                            <Table.Cell className="text-success">terverifikasi</Table.Cell>
                            <Table.Cell>
                                <ButtonNav></ButtonNav>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'lorem ipsum dolot sit amet'}
                            </Table.Cell>
                            <Table.Cell>Rp10.000.000</Table.Cell>
                            <Table.Cell>Rp6.000.000</Table.Cell>
                            <Table.Cell className="text-warning">dalam tinjauan</Table.Cell>
                            <Table.Cell>
                                <ButtonNav></ButtonNav>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'lorem ipsum dolot sit amet'}
                            </Table.Cell>
                            <Table.Cell>Rp10.000.000</Table.Cell>
                            <Table.Cell>Rp6.000.000</Table.Cell>
                            <Table.Cell className="text-danger">gagal</Table.Cell>
                            <Table.Cell>
                                <ButtonNav></ButtonNav>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}


export default ResearcherDashboard