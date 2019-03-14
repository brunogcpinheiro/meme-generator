import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./styles/global";

import ImagesList from "./components/ImagesList";

class App extends Component {
	render () {
		return (
			<Fragment>
				<GlobalStyle />
				<ImagesList />
			</Fragment>
		);
	}
}

export default App;
