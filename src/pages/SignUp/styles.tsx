import styled from 'styled-components';

import signUpBackgroundImg from '../../assets/backgroundLogin.svg';

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: stretch;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	place-content: center;

	width: 100%;
	max-width: 700px;

	form {
		margin: 80px 0;
		width: 340px;
		text-align: center;
	}

	h1 {
		margin-bottom: 24px;
	}

	a {
		color: #ff9000;
		display: block;
		margin-top: 24px;
		text-decoration: none;
		transition: color 0.2s;

		&:hover {
			opacity: 0.8;
		}
	}

	> a {
		color: '#ff9000';
		display: block;
		margin-top: 24px;
		text-decoration: none;
		transition: color 0.2s;

		display: flex;
		align-items: center;

		svg {
			margin-right: 16px;
		}

		&:hover {
			opacity: 0.8;
		}
	}
`;

export const Background = styled.div`
	flex: 1;
	background: url(${signUpBackgroundImg}) no-repeat center;
	background-size: cover;
`;
