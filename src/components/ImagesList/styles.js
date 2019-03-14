import styled from "styled-components";

export const ListWrapper = styled.ul`
	height: 90vh;
	width: 15%;
	margin: 50px 0 50px 20px;
	background: #fff;
	-webkit-box-shadow: 0px 3px 17px 0px rgba(199, 199, 199, 1);
	-moz-box-shadow: 0px 3px 17px 0px rgba(199, 199, 199, 1);
	box-shadow: 0px 3px 17px 0px rgba(199, 199, 199, 1);
	list-style: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: scroll;

	p {
		text-align: center;
		color: #c3c3c3;
		margin-top: 20px;
		font-style: italic;
		font-weight: bold;
	}
`;

export const ImageWrapper = styled.li`padding: 10px;`;

export const Image = styled.img`
	width: 100%;
	margin: 3px 0;
	-webkit-box-shadow: 0px 3px 5px 0px rgba(199, 199, 199, 1);
	-moz-box-shadow: 0px 3px 5px 0px rgba(199, 199, 199, 1);
	box-shadow: 0px 3px 5px 0px rgba(199, 199, 199, 1);
`;