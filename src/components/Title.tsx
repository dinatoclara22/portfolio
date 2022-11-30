interface Props {
	text: string;
}

export default function Title({ text }: Props) {
	return (
		<h1 className="text-center md:text-left text-2xl font-bold mb-9">{text}</h1>
	);
}
