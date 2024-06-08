import React from 'react'
import { useLocation } from 'react-router-dom';
import HomeTemplate from '../../templates/HomeTemplate';
import SearchInput from '../../components/SearchInput';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SearchResult = () => {
    const query = useQuery()

    return (
        <HomeTemplate>
            <div className="mx-6">
                <div className="m-auto w-full my-10">
                    <SearchInput className='!m-auto !block' searchHandle={() => { }}></SearchInput>
                    <div className='text-center my-6'>hasil pencarian : {query.get('search')}</div>
                </div>
                <div className="w-full h-96 flex justify-center items-center">
                    <h1 className='text-lg lg:text-2xl font-bold text-center'>Hasil pencarian kamu ga ada nih:)</h1>
                </div>
            </div>
        </HomeTemplate>
    )
}

export default SearchResult