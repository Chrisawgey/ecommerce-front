import styled from "styled-components"

const ProductWrapper = styled.div`

`;

const WhiteBox = styled.div`
    background-color: #fff;
    padding: 20px;
    height: 150px;
    text-align: center;
    display: flex;
    align-items: center;
    img{
        max-width: 100%;
        max-height: 150px;
    }
`;

export default function ProductBox({_id,title,description,price,images}) {
    return(
    <ProductWrapper>
        <WhiteBox>
        <div>
        <img src={images[0]} alt=""/>
        </div>
        </WhiteBox>
        {title}
    </ProductWrapper>
    )
}