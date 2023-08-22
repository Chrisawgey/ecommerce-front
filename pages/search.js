import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SearchInput = styled(Input)`
    padding: 5px 10px;
    border-radius: 5px;
    margin: 30px 0 30px;
    font-size: 1.4rem;
`;

export default function SearchPage() {
    const [phrase,setPhrase] = useState('');
    useEffect(() => {
        if (phrase.length > 0) {
            axios.get('/api/products?search=' +encodeURIComponent(phrase))
                .then(response => {
                    console.log(response.data);
                });
        }
    }, [phrase])
    const inputRef = useRef();
    return (
        <>
            <Header />
            <Center>
                <SearchInput 
                autoFocus
                value={phrase}
                onChange={ev => setPhrase(ev.target.value)}
                placeholder="Search for products..." />
            </Center>
        </>
    );
}