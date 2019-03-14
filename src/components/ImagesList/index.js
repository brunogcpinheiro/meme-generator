import React from "react";
import { ListWrapper, ImageWrapper, Image } from "./styles";
import MemeImg from "../../assets/img/meme.jpg";

export default function ImagesList () {
	return (
		<ListWrapper>
			<p>Drag an image to the box...</p>
			<ImageWrapper>
				<Image src={MemeImg} alt="Meme" />
			</ImageWrapper>
			<ImageWrapper>
				<Image src={MemeImg} alt="Meme" />
			</ImageWrapper>
			<ImageWrapper>
				<Image src={MemeImg} alt="Meme" />
			</ImageWrapper>
			<ImageWrapper>
				<Image src={MemeImg} alt="Meme" />
			</ImageWrapper>
			<ImageWrapper>
				<Image src={MemeImg} alt="Meme" />
			</ImageWrapper>
		</ListWrapper>
	);
}
