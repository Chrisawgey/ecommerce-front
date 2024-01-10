import styled from "styled-components"
import Button, { ButtonStyle } from "./Button";
import CartIcon from "./icons/Cart";
import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { primary } from "@/lib/colors";
import FlyingButton from "./FlyingButton";
import HeartOutlineIcon from "./icons/HeartOutlineICon";


const ProductWrapper = styled.div`
    button{
    width: 100%;
    text-align: center;
    justify-content: center;
  }
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
    position: relative;
    img{
        max-width: 100%;
        max-height: 80px;
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size:.9rem;
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
        gap: 5px;
     }
    align-items: center;
    justify-content:space-between;
    margin-top:2px;
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

// properties for the wishlist button
const WishListButton = styled.button`
    border:0;
    width: 40px !important;
    height: 40px;
    padding: 10px;
    position: absolute;
    top:0;
    right:0;
    background:transparent;
    cursor: pointer;
    ${props => props.wished ? `
        color:red;
    ` : `
        color:black;
    `}
    svg{
        width: 16px;
    }
`;

export default function ProductBox({_id,title,description,price,images}) {
    const url = '/products/'+_id;
    const [isWished,setIsWished] = useState(false);
    function addToWishlist(ev) {
        ev.preventDefault();       
        ev.stopPropagation();
        setIsWished(true);
    }
    return(
    <ProductWrapper>
        <WhiteBox href={url}>
        <div>
            <WishListButton wished={isWished} onClick={addToWishlist}>
             <HeartOutlineIcon />
            </WishListButton>
        <img src={images?.[0]} alt=""/>
        </div>
        </WhiteBox>
        <ProductInfoBox>
            <Title href={url}>{title}</Title>
            <PriceRow>
                <Price>
                    ${price}
                </Price>
                <FlyingButton _id={_id} src={images?.[0]}>Add to cart</FlyingButton>
            </PriceRow>
        </ProductInfoBox>
    </ProductWrapper>
    )
}