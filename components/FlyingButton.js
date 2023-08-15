import styled from "styled-components";
import {ButtonStyle} from "@/components/Button";
import {primary} from "@/lib/colors";
import FlyingButtonOriginal from 'react-flying-item';
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "./CartContext";


const FlyingButtonWrapper = styled.div`
  button{
    ${ButtonStyle};
    ${props => props.main ? `
        background-color: ${primary};
        color:white;
    `:`
        background-color: transparent;
        border: 1px solid ${primary};
        color:${primary};
    `}
    ${props => props.white && `
        background-color: white;
        border: 1px solid white;
    `}
  }
  `;

export default function FlyingButton(props) {
    const {addProduct} = useContext(CartContext);
    function sendImageToCart(ev,imageSrc) {
        console.log({ev,imageSrc})
    }

      
    return(
        <>  
        <div style={{width:'1px',height:'1px'}}></div>
            <FlyingButtonWrapper
        white={props.white} 
        main={props.main} 
        onClick={() => addProduct(props._id)}>
        <button onClick={ev => sendImageToCart(ev, props.src)} {...props} />
    </FlyingButtonWrapper>
        </>
    );
}