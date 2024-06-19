"use client";
import ButtonNav from '../../components/ButtonNav';
import DashboardTemplate from '../../templates/DashboardTemplate'
import { Table } from "flowbite-react";
import { IoMdDownload } from "react-icons/io";
const ProposalList = () => {
    return (
        <DashboardTemplate title='Admin' className=''>
            <ProjectList></ProjectList>
        </DashboardTemplate>
    )
}

export function ProjectList() {
    return (
        <div className=" w-11/12 m-auto !my-0">
            <h1 className="my-4 font-medium text-lg">Proyek yang perlu anda review</h1>
            <div className="overflow-x-auto shadow !rounded-xl">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Judul</Table.HeadCell>
                        <Table.HeadCell>unduh proposal</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                <a href='/project/1'>
                                    {'lorem ipsum dolot sit amet'}
                                </a>
                            </Table.Cell>
                            <Table.Cell className='!justify-center flex'><IoMdDownload size={20} className='text-primary'></IoMdDownload></Table.Cell>

                        </Table.Row>

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default ProposalList