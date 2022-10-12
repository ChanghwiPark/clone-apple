import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BlockSearchBar from '../components/BlockSearchBar'
import NavBreadcrumbs from '../components/NavBreadcrumbs'
import NavMenu from '../components/NavMenu'
import NavSiteMap from '../components/NavSiteMap'
import SectionLastFooter from '../components/SectionLastFooter'
import BlockSearchResultImage from '../components/BlockSearchResultImage'
import BlockSearchResult from '../components/BlockSearchResult'
import NavPagination from '../components/NavPagination'

import { searchResultImageDummy, searchResultDummy } from './searchResultDummy.js'

// queryString
import { useLocation } from 'react-router-dom'
import QueryString from "qs";

export default function SearchResult() {
    // module
    const location = useLocation();
    const queryData = QueryString.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    // local state
    const [searchResultImageArray, setSearchResultImageArray] = useState([])
    const [searchResultArray, setSearchResultArray] = useState([])
    const [page, setPage] = useState(1);
    const limit = 5;

    // useEffect
    useEffect(() => {
        setSearchResultImageArray(searchResultImageDummy)
        setSearchResultArray(searchResultDummy)
    }, [])

    // function
    const filteredSearchResultImageArray = searchResultImageArray.filter((keyword) => (
        keyword.content.toLowerCase().includes(queryData.src)
    ))
    const filteredSearchResultArray = searchResultArray.filter((keyword) => (
        keyword.content.toLowerCase().includes(queryData.src)
    ))
    const numItems = filteredSearchResultImageArray.length + filteredSearchResultArray.length
    const offset = (page - 1) * limit

    //UI
    return (
        <>
            <NavMenu />
            
            <MContainerSearchResultMain>
                <MContainerSearchBar>
                    <BlockSearchBar 
                        className='-searchResult'
                        placeholder=''
                    />
                </MContainerSearchBar>

                <MContainerSearchResult>
                    <div className='m-containerTabBarSearch'>
                        <ul>
                            <li><button>Explore</button></li>
                            <li><button>Accessories</button></li>
                            <li><button>Support</button></li>
                            <li><button>Find a Store</button></li>
                        </ul>
                        
                    </div>
                    <div className='m-containerTabSearch'>
                        {
                            numItems===0
                            || <ResultCount>{`${numItems} results found`}</ResultCount>
                        }
                        <div className='m-containerTabSearch__containerContent'>
                            {
                                (Boolean(filteredSearchResultImageArray.length) && page===1) &&  filteredSearchResultImageArray.map((item) => (
                                    <BlockSearchResultImage
                                        image={item.image}
                                        title={item.title}
                                        content={item.content}
                                        cta={item.ctaArray}
                                    />
                                ))
                            }
                            {
                                Boolean(filteredSearchResultArray.length) && 
                                filteredSearchResultArray.slice(offset, offset + limit).map((item) => (
                                    <BlockSearchResult 
                                        title={item.title}
                                        content={item.content}
                                        link={item.link}
                                    />
                                ))
                            }
                            {
                                numItems===0
                                && <TextNoMatch>Sorry, no matches were found.<br/>Please try a different search.</TextNoMatch>
                            }
                        </div>
                        <NavPagination 
                            total = {filteredSearchResultArray.length}
                            limit = {limit}
                            page = {page}
                            setPage = {setPage}
                        />
                    </div>
                </MContainerSearchResult>
            </MContainerSearchResultMain>

            <OFooterIphone13 className="o-footer -Iphone13">
                <div className="m-containerFooter -Iphone13">
                    <NotesFooterAlert> †† We approximate your location from your internet IP address by matching it to a geographic region or from the location entered during your previous visit to Apple. </NotesFooterAlert>
                    <NavBreadcrumbs
                        locationArray={['Search Results']}
                    />
                    <NavSiteMap />
                    <SectionLastFooter />
                </div>
            </OFooterIphone13>
        </>
    )
}

const OFooterIphone13 = styled.footer`
    .m-containerFooter.-Iphone13 {
        padding-top: 0px
    }
`

const NotesFooterAlert = styled.div`
    border-bottom: 1px solid #d2d2d7;
    padding: 17px 0 11px;
`

const MContainerSearchResultMain = styled.div`
    padding-top: 37px;
`

const MContainerSearchResult = styled.div`
    .m-containerTabBarSearch {
        border-bottom: 1px solid #d2d2d7;
    }

    ul {
        width: 980px;
        margin: 0 auto;
        overflow:hidden;

        li {
            float: left;
            padding-left: 40px;

            &:first-child{
                padding-left: 0px;
            }

            button {
                margin: 2px 0 5px;
            }
        }
    }
    .m-containerTabSearch {
        width: 980px;
        margin: 0 auto;
        padding-bottom: 36px;

        &__containerContent{
            padding: 18px 0 22px;
        }
    }
`

const ResultCount = styled.div`
    font-size: 12px;
    line-height: 1.33337;
    color: #6e6e73;
    padding-top: 8px;
`

const MContainerSearchBar = styled.div`
    margin: 0 auto;
    width: 980px;

    #buttonSearch {
        background-position: 12.5px -47px;
    }

    #inputSearchBar {
        width: 346px;
        box-sizing: border-box;
        margin-bottom: 30px;
        height: 2.2rem;
    }
`

const TextNoMatch = styled.div`
    font-size: 32px;
    line-height: 1.25;
    font-weight: 600;
    padding: 47px 0 111px;
`