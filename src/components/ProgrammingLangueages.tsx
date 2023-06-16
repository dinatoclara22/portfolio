import Title from "./Title";

// Icons Importation
import { RiHtml5Line, RiCss3Fill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass, FaGitAlt } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import {
	SiTailwindcss,
	SiReact,
	SiAdobephotoshop,
	SiTypescript,
} from "react-icons/si";

export default function ProgrammingLanguage() {
	return (
		<section>
			<Title text="Linguagens e ferramentas" />
			<div className=" flex flex-wrap gap-6 items-center justify-center md:justify-start">
				<RiHtml5Line size={40} className="text-indigo-500" />
				<RiCss3Fill size={40} className="text-indigo-500" />
				<IoLogoJavascript size={40} className="text-indigo-500" />
				<SiTypescript size={40} className="text-indigo-500" />
				<FaSass size={40} className="text-indigo-500" />
				<BsBootstrap size={40} className="text-indigo-500" />
				<SiTailwindcss size={40} className="text-indigo-500" />
				<SiReact size={40} className="text-indigo-500" />
				<SiAdobephotoshop size={40} className="text-indigo-500" />
				<FaGitAlt size={40} className="text-indigo-500" />
			</div>
		</section>
	);
}
