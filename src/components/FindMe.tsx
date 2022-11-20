import Title from "./Title";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

export default function FindMe() {
	return (
		<>
			<div className="mt-9">
				<Title text="Find Me" />
			</div>
			<div className="flex gap-8 items-center justify-center md:justify-start">
				<a href="https://www.linkedin.com/in/clara-dinato-b86774207/" className='transition ease-in-out hover:-translate-y-2'>
					<BsLinkedin size={30} className="text-indigo-500" />
				</a>

				<a href="https://github.com/dinatoclara22" className='transition ease-in-out hover:-translate-y-2'>
					<BsGithub size={30} className="text-indigo-500" />
				</a>

				<a href="https://www.instagram.com/dinato_22/" className='transition ease-in-out hover:-translate-y-2'>
					<GrInstagram size={30} className="text-indigo-500" />
				</a>
			</div>
		</>
	);
}
