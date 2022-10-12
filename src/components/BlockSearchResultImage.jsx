import styled from "styled-components";
import ButtonsCta from "./ButtonsCta";

export default function BlockSearchResultImage({ image, title, content, cta}) {
    return(
        <MBlockSearchResultImage>
            <div className="a-blockSearchResult__image">{image}</div>
            <div className="a-blockSearchResult__containerDescription">
                <h2 className="a-blockSearchResult__title">{title}</h2>
                <p className="a-blockSearchResult__content">{content}</p>
                <ButtonsCta className="-blockSearchResult" arrayButtons={cta}/>
            </div>
        </MBlockSearchResultImage>
    );
}

const MBlockSearchResultImage = styled.section`
    padding: 18px 0 50px;
    margin-top: 7px;

    .a-blockSearchResult {
        &__image {
            float: left;
            
            img {
                max-width: 196px;
                max-height: 103px;
            }
        }
        &__containerDescription {
            padding-left: 30px;
            display: table;

            h2 {
                font-size: 21px;
                line-height: 1.19048;
                color: #1d1d1f;
            }
            p {
                font-size: 17px;
                line-height: 1.47059;
                padding: .4em 0;
            }
            .m-containerCtaButton.-blockSearchResult{
                justify-content: flex-start;
                line-height: 1.47059;
            }
        }
    }
`