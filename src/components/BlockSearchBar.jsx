import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
            <AInputSearchBar
                className={className}
                type="text"
                placeholder="Search apple.com"
                value={searchValue}
                onChange={handleSearch}
            />
        </>
    )
}

const AInputSearchBar = styled.input`
    padding: 0 38px 0 40px;
    width: 604.667px;
    height: 44px;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-size: 17px;
    letter-spacing: -.021em;

    &.-notFound{
        margin-bottom: 14px;
        color: #333;
        border: 1px solid #d6d6d6;
        border-radius: 4px;
    }
`