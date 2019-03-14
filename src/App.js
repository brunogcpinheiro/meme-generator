import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./styles/global";
import { Container } from "./appStyles";

import ImagesList from "./components/ImagesList";
import Actions from "./components/Actions";

class App extends Component {
	render () {
		return (
			<Fragment>
				<GlobalStyle />
				<Container>
					<ImagesList />
					<Actions />
				</Container>
			</Fragment>
		);
	}
}

export default App;
