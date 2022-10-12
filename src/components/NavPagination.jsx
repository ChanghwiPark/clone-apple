import { useState } from "react";
import styled from "styled-components";

export default function NavPagination({ total, limit, page, setPage }) {
    const [searchPage, setSearchPage] = useState(page)

    const numPages = Math.ceil(total / limit);

    const handlePage = (e) => {
        setSearchPage(parseInt(e.target.value))
    } 

    var inputPagination = document.getElementById("inputPagination")
    inputPagination && inputPagination.addEventListener("keypress", function(e){
        if (e.key === "Enter"){
            e.preventDefault()
            if(1 <= searchPage && searchPage <= numPages) setPage(searchPage)
        }
    })

    return (
        <MNavPagination>
            <Container>
                <Button 
                    onClick={() => {
                        setPage(page - 1)
                        setSearchPage(page - 1)
                    }} 
                    disabled={page <= 1}
                >
                    􀆉
                </Button>
                <Text>
                    <input id="inputPagination" type="number" value={searchPage} onChange={handlePage}/>
                    <span>of</span>
                    <span>{numPages}</span>
                    </Text>
                <Button 
                    onClick={() => {
                        setPage(page + 1)
                        setSearchPage(page + 1)
                    }} 
                    disabled={page >= numPages}
                >
                    􀆊
                </Button>
            </Container>
        </MNavPagination>
    );
}

const MNavPagination = styled.nav`
    display: flex;
    justify-content: center;
    border-top: 1px solid #d2d2d7;
    padding-top: 18px;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 320px;
`

const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 0;
    color:#1d1d1f;
    font-size: 1rem;

    &:hover {
        cursor: pointer;
    }

    &[disabled] {
        color: #1d1d1f52;
        cursor: revert;
    }
`;

const Text = styled.div`
    color: #6e6e73;

    input {
        font-size: 17px;
        width: 28px;
        height: 2.12em;
        border-radius: 8px;
        text-align: center;
        border: 1px solid #d2d2d7;
        color: #6e6e73;
        -moz-appearance: textfield;
    }

    span {
        padding-left: 8px;
    }
`