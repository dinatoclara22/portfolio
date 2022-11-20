interface Props {
  text: string;
}

export default function Title({text}:Props) {
	return (
		<div>
			<h1 className="text-center md:text-left text-2xl font-bold mb-9">{text}</h1>
		</div>
	);
}