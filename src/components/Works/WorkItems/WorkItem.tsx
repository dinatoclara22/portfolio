interface Props {
	href: string;
	src: string;
	alt: string;
}

export default function WorkItem({ alt, src, href }: Props) {
	return (
		<a href={href}>
			<img
				src={src}
				alt={alt}
				className="rounded-2xl border transition ease-in-out hover:-translate-y-2 cursor-pointer"
			/>
		</a>
	);
}
