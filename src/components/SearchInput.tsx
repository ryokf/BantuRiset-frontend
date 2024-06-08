import React from 'react'

const SearchInput = ({ searchHandle, className}: { searchHandle: () => void, className?: string }) => {
    return (
        <form onSubmit={searchHandle}>
            <input type="text" className={`rounded-full border border-primary w-full lg:w-10/12 placeholder:text-gray ${className}`} placeholder='Cari Riset' />
        </form>
    )
}

export default SearchInput