import styled from "styled-components";


export const Container = styled.div`
    background: red;
    margin-top: 8rem;
    height: 16rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    p {
        color: #FFFFFF;
        font-size: 8rem;
        margin: 0;
    }

    .twenty {
        position: absolute;
        -webkit-animation: discount 3s ease-in-out 0.6s infinite;
        bottom: 0;
        left: 20%;
        color: #fff;
        font-size: 32px;
    }

    .fifty {
        position: absolute;
        -webkit-animation: discount 3s ease-in-out 0.4s infinite;
        bottom: 0;
        right: 20%;
        color: #fff;
        font-size: 32px;
    }

    .thirty {
        position: absolute;
        -webkit-animation: discount 3s ease-in-out 0.2s infinite;
        bottom: 0;
        right: 40%;
        color: #fff;
        font-size: 32px;
    }

    .ten {
        position: absolute;
        -webkit-animation: discount 3s ease-in-out infinite;
        bottom: 0;
        left: 30%;
        color: #fff;
        font-size: 32px;
    }

    @keyframes discount {
        0% {
            transform: translatey(0px);
            opacity: 0;
        }
        10%{
            opacity: 1;
        }
        50% {
            transform: translatey(-150px);
        }
        100% {
            transform: translatey(0px);
            filter: blur(12px) opacity(0%);
        }
    }
`;


