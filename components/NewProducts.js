import styled from "styled-components";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export default function NewProducts ({newProducts}) {
    return(
        <ProductsGrid>
            {newProducts?.length > 0 && newProducts.map(product => (
                <div>{product.title}</div>
            ))}
        </ProductsGrid>
    );
}