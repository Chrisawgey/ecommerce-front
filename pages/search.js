import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import ProductsGrid from "@/components/ProductsGrid";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const SearchInput = styled(Input)`
    padding: 5px 10px;
    border-radius: 5px;
    margin: 30px 0 30px;
    font-size: 1.4rem;
    position: sticky;
    top: 75px;
`;

export default function SearchPage() {
    const [phrase,setPhrase] = useState('');
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const debouncedSearch = useCallback(
        debounce(searchProducts, 500), []);
    useEffect(() => {
        if (phrase.length > 0) {
            setIsLoading(true);
            debouncedSearch(phrase);
        } else {
            setProducts([]);
        }
    }, [phrase]);

    function searchProducts(phrase) {
        axios.get('/api/products?phrase=' +encodeURIComponent(phrase))
                .then(response => {
                    setProducts(response.data);
                    setIsLoading(false);
                });
    }
    return (
        <>
            <Header />
            <Center>
                <SearchInput 
                autoFocus
                value={phrase}
                onChange={ev => setPhrase(ev.target.value)}
                placeholder="Search for products..." />
                {!isLoading && phrase != '' &&products.length === 0 && (
                    <h2>No Products Found For Query "{phrase}"</h2>
                )}
                {isLoading && (
                    <Spinner fullWidth={true} />
                )}
                {!isLoading && products.length > 0 && (
                    <ProductsGrid products={products} />
                )}
            </Center>
        </>
    );
}