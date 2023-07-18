import styled from "styled-components";
import { ButtonStyle } from "./Button";
import { primary } from "@/lib/colors";
import FlyingButtonOriginal from "react-flying-item";

const FlyingButtonWrapper = styled.div`
    button{
        ${ButtonStyle}
        background-color: transparent;
        border: 1px solid ${primary};
        color: ${primary};
    }
`;


export default function FlyingButton(props) {
    return(
    <FlyingButtonWrapper>
        <FlyingButtonOriginal {...props} 
            targetTop={'5%'} 
                    flyingItemStyling={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '60px',
                        maxHeight: '60px',
                        borderRadius: 0,
                    }}
                    targetLeft={'95%'}
        />
    </FlyingButtonWrapper>
    );

}