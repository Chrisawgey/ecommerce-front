import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
    background-color: #222;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`;

export default function Featured() {
    return (
        <Bg>
            <Center>
            <Title>Pro anywhere</Title>
            <p>lorem ipsum doloe sit wais dhabdflbad
            dfsfuhdsl dflsd fs, saudghsadsjfh 
            sa dusfgldf ugudfgdalsjgldjshaldkjshakjfglgf</p>
            </Center>
         </Bg>
    );
}