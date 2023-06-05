import styled from "styled-components";

const styledDiv = styled.div`
    max-width: 800px;
    margin: 0 20px;
`;

export default function Center({children}) {
    return(
        <styledDiv>{children}</styledDiv>
    );
}