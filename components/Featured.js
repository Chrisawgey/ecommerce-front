import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: .8rem;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    img{
        max-width: 100%
    }
`;

export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                <div>
                <Title>Pro anywhere</Title>
            <Desc>orem ipsum doloe sit wais dhabdflbad
            dfsfuhdsl dflsd fs, saudghsadsjfh  sa dusfgldf ugudfgdalsjgldjshaldkjshakjfglgforem 
            sa dusfgldf ugudfgdalsjgldjshaldkjshakjfglgorem ipsum doloe sit wais dhabdflbad
            dfsfuhdsl dflsd fs, saudghsadsjfh sa dusfgldf ugudfgdalsjgldjshaldkjshakjfglgforem 
            dfsfuhdsl dflsd fs, saudghsadsjfh sa dusfgldf ugudfgdalsjgldjshaldkjshakjfglg
            dfsfuhdsl dflsd fs, saudghsadsjfh dfsfuhdsl dflsd fs, saudghsadsjfh </Desc>
                </div>
                <div>
                    <img src="https://chriz-next-ecommerce.s3.amazonaws.com/1686082513730.png" alt="" />
                </div>
                </Wrapper>
            </Center>
         </Bg>
    );
}