import styled, {css} from "styled-components";

const StyledButton = styled.button`
    background-color: #5542F6;
    border: 0;
    color: #fff;
    padding: 5px 15px;
    border-radius: 6px;
    cursor: pointer;
    ${props => props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 10px 20px;
    `}
`;

export default function Button({children,...rest}) {
    return(
        <StyledButton {...rest}>{children}</StyledButton>
    );
}