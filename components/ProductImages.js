import styled from "styled-components"

export default function ProductImages({images}) {
    const Image = styled.img`
        max-width: 100%;
        max-height: 100%;
    `;
    const ImageButtons = styled.div`
        display: flex;
        gap: 10px;
    `;
    const ImageButton = styled.div`
        border: 1px solid #aaa;
        height: 40px;
    `;

    return (
        <>
            <Image src={images?.[0]} />
            <ImageButtons>
                {images.map(image => (
                    <ImageButton>
                        <Image src={image} alt=""/>
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    );
}