import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
	text: string;
}

export default function Title({ text, ...props }: Props) {

	//Definindo um estilo default
	const className = "text-center md:text-left text-2xl font-bold mb-9 ".concat(
		props?.className || ""
	);

	return (
		<h1 {...props} className={className}>
			{text}
		</h1>
	);
}
