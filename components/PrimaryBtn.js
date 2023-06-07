import styled from "styled-components";

const StyledButton = styled.button`
    background-color: #5542F6;
`;

export default function PrimaryBtn({children}) {
    return(
        <StyledButton>{children}</StyledButton>
    );
}