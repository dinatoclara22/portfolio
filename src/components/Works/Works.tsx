import Title from "../Title";
import WorkItem from "./WorkItems/WorkItem";

export default function Works() {
	// const urlProjects = [
	// 	{
	// 		url: "https://github.com/dinatoclara22/home-you",
	// 		image: "/assets/homeyou.svg",
	// 	},
	// 	{
	// 		url: "https://github.com/dinatoclara22/home-you",
	// 		image: "/assets/homeyou.svg",
	// 	},
	// ];

	return (
		<section>
			<div className="mt-14 mb-9">
				<Title text="My favorite works" />
			</div>

			<div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
				<WorkItem
					href="https://github.com/dinatoclara22/home-you"
					src="/assets/homeyou.svg"
					alt="Projeto Home You"
				/>
				<WorkItem
					href="https://github.com/dinatoclara22/rachi-project"
					src="/assets/rachi.svg"
					alt="Projeto Rachi"
				/>
				<WorkItem
					href="https://github.com/dinatoclara22/helpdog"
					src="/assets/helpDog.svg"
					alt="Projeto Help Dog"
				/>
			</div>
		</section>
	);
}
