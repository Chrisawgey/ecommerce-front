import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const SearchInput = styled(Input)`
    padding: 5px 10px;
    border-radius: 5px;
    margin: 30px 0 30px;
    font-size: 1.4rem;
`;

export default function SearchPage() {
    const inputRef = useRef();
    return (
        <>
            <Header />
            <Center>
                <SearchInput 
                autoFocus
                placeholder="Search for products..." />
            </Center>
        </>
    );
}