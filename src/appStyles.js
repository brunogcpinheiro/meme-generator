import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-areas: "nav header side" "nav content side" "nav footer side";

	grid-template-columns: 1fr 3fr 1fr;
	grid-template-rows: auto 1fr auto;
	grid-gap: 40px;

	height: 90vh;
`;
