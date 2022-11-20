import Title from "./Title";
import WorkItem from "./WorkItem";

export default function Works() {
	return (
		<>
			<div className="mt-14 mb-9">
				<Title text="My favorite works" />
			</div>

			<div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
				<WorkItem
					href="https://github.com/dinatoclara22/home-you"
					src="../../public/assets/homeyou.svg"
					alt="Projeto Home You"
				/>
				<WorkItem
					href="https://github.com/dinatoclara22/rachi-project"
					src="../../public/assets/rachi.svg"
					alt="Projeto Rachi"
				/>
				<WorkItem
					href="https://github.com/dinatoclara22/helpdog"
					src="../../public/assets/helpDog.svg"
					alt="Projeto Help Dog"
				/>
			</div>
		</>
	);
}
