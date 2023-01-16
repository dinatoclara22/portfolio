import Title from "../Title";
import FindMeItem from "../FindMe/FindMeItem/FindMeItem";

import { BsLinkedin, BsGithub, BsSpotify } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";

export default function FindMe() {
	return (
		<section>
			<div className="mt-9">
				<Title text="Where you can find me" />
			</div>
			<div className="flex gap-8 items-center justify-center md:justify-start">
				<FindMeItem href="https://www.instagram.com/dinato_22/">
					<GrInstagram size={30} className="text-indigo-500" />
				</FindMeItem>

				<FindMeItem href="https://www.linkedin.com/in/clara-dinato-b86774207/">
					<BsLinkedin size={30} className="text-indigo-500" />
				</FindMeItem>

				<FindMeItem href="https://github.com/dinatoclara22">
					<BsGithub size={30} className="text-indigo-500" />
				</FindMeItem>

				<FindMeItem href="https://open.spotify.com/user/dinatinho?si=0e5d2f6a94d845c9">
					<BsSpotify size={30} className="text-indigo-500" />
				</FindMeItem>

				<FindMeItem href="https://discordapp.com/users/376805456938795009">
					<SiDiscord size={30} className="text-indigo-500" />
				</FindMeItem>
			</div>
		</section>
	);
}
