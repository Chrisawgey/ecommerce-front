import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";

const StyledHeader = styled.header`
    background-color: #222;
`; 

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                <Logo href={'/'}>
                    PlaceHolder
                </Logo>
                <nav>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/products'}>All products</Link>
                    <Link href={'/categories'}>Categories</Link>
                    <Link href={'/account'}>Account</Link>
                    <Link href={'/cart'}>Cart (0)</Link>
                </nav>
                </Wrapper>
            </Center>
        </StyledHeader>
    );
}
