import React from 'react'
import { useLocation } from 'react-router-dom';
import HomeTemplate from '../../templates/HomeTemplate';
import SearchInput from '../../components/SearchInput';
import Navbar from '../../components/Navbar';
import Navbar2 from '../../components/Navbar2';
import { Footer } from '../../components/Footer';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SearchResult = () => {
    const query = useQuery()

    return (
        <HomeTemplate>
            <Navbar2 className='landscape:hidden' title='Pencarian'></Navbar2>
            <Navbar className='hidden landscape:block'></Navbar>
            <div className="mx-6 min-h-screen">
                <div className="m-auto w-full my-10">
                    <SearchInput className='!m-auto !block' searchHandle={() => { }}></SearchInput>
                    <div className='text-center my-6'>hasil dari {query.get('search')}</div>
                </div>
                <div className="w-full h-96 flex justify-center items-center">
                    <h1 className='text-lg lg:text-2xl font-bold text-center'>Hasil pencarian kamu ga ada nih:)</h1>
                </div>
            </div>
            <Footer></Footer>
        </HomeTemplate>
    )
}

export default SearchResult