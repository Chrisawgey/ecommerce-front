import { primary } from "@/lib/colors";
import styled, {css} from "styled-components";

export const ButtonStyle = css`
        border: 0;
    padding: 5px 15px;
    border-radius: 6px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    svg{
        height: 16px;
        margin-right: 5px;
    }
    ${props => props.blanco && !props.outline && css`
        background-color: #fff;
        color: #000;
    `}
    ${props => props.blanco && props.outline && css`
        background-color: transparent;
        color: #fff;
        border: 1px solid #fff;
    `}
    ${props => props.primary && !props.outline && css`
        background-color: ${primary};
        border: 1px solid ${primary};
        color: #fff;
    `}
    ${props => props.primary && props.outline && css`
        background-color: transparent;
        border: 1px solid ${primary};
        color: ${primary};
    `}
    ${props => props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 10px 20px;
    svg{
        height: 20px;
    }
    `}
`;

const StyledButton = styled.button`
    ${ButtonStyle}
`;

export default function Button({children,...rest}) {
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    );
}