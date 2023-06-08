import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

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
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    img{
        max-width: 100%
    }
`;
const Column = styled.div`
    display: flex;
    align-items: center;
`;

export default function Featured() {
    return (
        <Bg>
              <Center>
                <Wrapper>
                  <Column>
                    <div>
                    <Title>Pro anywhere</Title>
            <Desc>orem ipsum doloe sit wais dhabdflbd dfsfuhdsl dflsd fs, saudghsadsjfh 
            dfsfuhdsl dflsd fs, saudghsadsjfh dfsfuhdsl dflsd fs, saudghsadsjfh 
            dfsfuhdsl dflsd fs, saudghsadsjfh </Desc>
            <Button blanco size="l">Read More</Button>
            <Button primary size="l">Add to cart</Button>
                    </div>
                   </Column>
                    <Column>
                        <img src="https://chriz-next-ecommerce.s3.amazonaws.com/1686082513730.png" alt="" />
                    </Column>
                </Wrapper>
            </Center>
         </Bg>
    );
}