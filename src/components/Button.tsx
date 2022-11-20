import { IoMdMail } from "react-icons/io";

interface Props {
	text: string
	href: string
}

export default function Button({ text, href }: Props) {
	return (
		<a
			className="max-w-[180px] py-4 px-5 rounded-lg transition ease-in-out bg-indigo-500 hover:-translate-y-1 hover:scale-110 duration-300"
			href={href}>
			<span className="text-white uppercase flex items-center">
				<IoMdMail className="mr-2 text-white" size={20} />
				{text}
			</span>
		</a>
	);
}
