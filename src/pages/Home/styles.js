import styled from 'styled-components'

export const TextTitle = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16rem;

    color: #110102;

    font-size: 3rem;

`;


export const TextParag = styled.p`
    display: flex;
    justify-content: center;

    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    margin-bottom: 16rem;

`;

export const Container = styled.div`
    width: 55%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr ));
    grid-auto-rows: minmax( 40rem, auto);
    grid-auto-flow: dense;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;

    h5 {
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        padding: 2rem 3rem 10px;
        color: #110102;
    }

    p {
        font-family: 'Raleway', sans-serif;
        padding: 0 3rem 1.5rem;
    }

    button {
        display: flex;
        background: transparent;
        border: 0;
        margin-left: 3rem;
        margin-bottom: 2rem;
    }
`;

export const ProductBlog = styled.div`
   
    img {
       width: 100%;
        object-fit: cover;
    }
`;

export const ProductBlog1 = styled.div`
        
    img {
        width: 100%;
        object-fit: cover;

    }

   
`;

export const ProductBlog2 = styled.div`
    img {
        width: 100%;
        object-fit: cover;

    }
`;

export const FinalProduct = styled.div`
    background: #f1f1fe;
    height: 5px
`;