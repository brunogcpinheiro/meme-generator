import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./styles/global";
import { Container } from "./appStyles";

import ImagesList from "./components/ImagesList";
import Actions from "./components/Actions";
import Box from "./components/Box";
import Banner from "./components/Banner";
import FooterActions from "./components/FooterActions";

class App extends Component {
	render () {
		return (
			<Fragment>
				<GlobalStyle />
				<Container>
					<ImagesList />
					<Actions />
					<Box />
					<Banner />
					<FooterActions />
				</Container>
			</Fragment>
		);
	}
}

export default App;
