interface Props {
	href: string;
	children: React.ReactNode;
}

export default function FindMeItem({ href, children }: Props) {
	return (
		<a href={href} className="transition ease-in-out hover:-translate-y-2">
			{children}
		</a>
	);
}
