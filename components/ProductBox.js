import styled from "styled-components"

const Box = styled.div`
    background-color: #fff;
`;

export default function ProductBox({_id,title,description,price}) {
    return(
        <Box>
            {title}
        </Box>
    )
}