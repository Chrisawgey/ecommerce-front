import { useState } from "react";
import styled from "styled-components"

const Image = styled.img`
        max-width: 100%;
        max-height: 100%;
    `;
    const ImageButtons = styled.div`
        display: flex;
        gap: 10px;
        margin-top: 10px;
    `;
    const ImageButton = styled.div`
        border: 2px solid #ccc;
        height: 40px;
        padding: 2px;
        cursor: pointer;
        border-radius: 5px;
    `;

export default function ProductImages({images}) {
    const [activeImage,setActivceImage] = useState(images?.[0]);
     return (
        <>
            <Image src={activeImage} />
            <ImageButtons>
                {images.map(image => (
                    <ImageButton onClick={() => setActivceImage(image)}>
                        <Image src={image} alt=""/>
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    );
}