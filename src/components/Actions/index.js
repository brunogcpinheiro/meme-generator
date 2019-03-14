import React from "react";
import { TiDocumentAdd } from "react-icons/ti";

import { ActionsWrapper } from "./styles";

const iconsStyles = {
	fontSize: "1.25rem",
	margin: "-3px 3px 0 0",
};

export default function Actions () {
	return (
		<ActionsWrapper>
			<button>
				<TiDocumentAdd style={iconsStyles} />Add Text Area
			</button>
		</ActionsWrapper>
	);
}
