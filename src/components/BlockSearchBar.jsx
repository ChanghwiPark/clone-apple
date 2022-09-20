import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BlockSearchBar({ className }) {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
    }
    const search = () => {
        navigate(`/search?src=${searchValue}`);
    }

    return (
        <>
            <button
                className="a-buttonSearchIcon -searchBar"
                onClick={search}
            />
            <input
                className={'a-inputSearchBar '+className}
                type="text"
                placeholder="Search apple.com"
                value={searchValue}
                onChange={handleSearch}
            />
        </>
    )
}
