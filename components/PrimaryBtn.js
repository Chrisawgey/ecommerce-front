import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #5542F6;
    border: 0;
    color: #fff;
    padding: 5px 15px;
    border-radious: 5px;
`;

export default function PrimaryBtn({children}) {
    return(
        <StyledButton>{children}</StyledButton>
    );
}