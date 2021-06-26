import styled from 'styled-components';

export const Container = styled.div`
    width: 55%;
    margin: 0 auto;
    display: grid;    
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr ));
    grid-auto-rows: minmax(8rem, auto);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    grid-column-end: span 1;
    grid-row-end: span 2;
    object-fit: cover;

`;

export const Img1 = styled.img`
    width: 100%;
    object-fit: cover;
    
    
`;

export const Img2 = styled.img`
    width: 100%;
    object-fit: cover;

`;

export const Img3 = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const Img4 = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column-start: span 1;
    grid-row-start: span 2;
    object-fit: cover;

`;

export const Img5 = styled.img`
    width: 100%;
    object-fit: cover;

`;

export const Img6 = styled.img`
    width: 100%;
    object-fit: cover;
    
`;