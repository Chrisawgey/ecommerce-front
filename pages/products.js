import Header from "@/components/Header";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
`;

export default function ProductsPage () {
    return(
        <>
            <Header />
            <Title>All Products</Title>
         </>

     );
}