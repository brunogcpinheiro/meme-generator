import React from "react";
import { ListWrapper, ImageWrapper, Image } from "./styles";
import { ImagesData } from "../../data/imagesData";

export default function ImagesList () {
	return (
		<ListWrapper>
			<p>Drag and drop an image to the box...</p>
			{ImagesData.map(img => (
				<ImageWrapper key={img.id}>
					<Image src={img.src} alt={img.alt} />
				</ImageWrapper>
			))}
		</ListWrapper>
	);
}
