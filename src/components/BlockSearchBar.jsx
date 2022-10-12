import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { searchState } from "../recoil/search";

export default function BlockSearchBar({ className, placeholder="Search apple.com" }) {
    const [searchValue, setSearchValue] = useRecoilState(searchState)
    const navigate = useNavigate()

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
        console.log(searchValue)
    }
    const search = () => {
        navigate(`/search?src=${searchValue}`);
    }

    var inputSearchBar = document.getElementById("inputSearchBar")
    inputSearchBar && inputSearchBar.addEventListener("keypress", function(e){
        if (e.key === "Enter"){
            e.preventDefault()
            document.getElementById('buttonSearch').click()
        }
    })

    return (
        <>
            <button
                id="buttonSearch"
                className="a-buttonSearchIcon -searchBar"
                onClick={search}
            />
            <AInputSearchBar
                id='inputSearchBar'
                className={className}
                type="text"
                placeholder={placeholder}
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

    &.-notFound, &.-searchResult{
        margin-bottom: 14px;
        color: #333;
        border: 1px solid #d6d6d6;
        border-radius: 4px;
    }
`