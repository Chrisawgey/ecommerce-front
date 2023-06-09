import styled from "styled-components"
import Button, { ButtonStyle } from "./Button";
import CartIcon from "./icons/Cart";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import FlyingButton from "react-flying-item";
import { primary } from "@/lib/colors";

const ProductWrapper = styled.div`

`;

const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 80px;
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size: .9rem;
    color: inherit;
    text-decoration: none;
    margin: 0;
`;

const ProductInfoBox = styled.div`
    margin-top: 5px;
`;

const PriceRow = styled.div`
    display: block;
    @media screen and (min-width: 786px) {
        display: flex;
        gap: 9px;
     }
    align-items: center;
    justify-content: space-between;
    margin-top: 2px;
`;

const Price = styled.div`
    font-size: 1rem;
    font-weight: 400;
    text-align: right;
    @media screen and (min-width: 786px) {
        font-size: 1.2rem;
        font-weight: 600;
        text-align: left;
    }
`;

const ButtonWrapper = styled.div`
    button{
        ${ButtonStyle}
        background-color: transparent;
        border: 1px solid ${primary};
        color: ${primary};
    }
`;

export default function ProductBox({_id,title,description,price,images}) {
    const {addProduct} = useContext(CartContext);
    const url = '/products/'+_id;
    return(
    <ProductWrapper>
        <WhiteBox href={url}>
        <div>
        <img src={images?.[0]} alt=""/>
        </div>
        </WhiteBox>
        <ProductInfoBox>
            <Title href={url}>{title}</Title>
            <PriceRow>
                <Price>
                    ${price}
                </Price>
                <ButtonWrapper onClick={() => addProduct(_id)}>
                <FlyingButton 
                    src={images?.[0]} 
                    targetTop={'5%'} 
                    flyingItemStyling={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '60px',
                        maxHeight: '60px',
                        borderRadius: 0,
                    }}
                    targetLeft={'95%'}>
                        Add to cart 
                    </FlyingButton>
                </ButtonWrapper>               
            </PriceRow>
        </ProductInfoBox>
    </ProductWrapper>
    )
}