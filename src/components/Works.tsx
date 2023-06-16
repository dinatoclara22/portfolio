import Title from "./Title";
// import WorkItem from "./WorkItems/WorkItem";
import project from "../data/projects.json";

export default function Works() {
	return (
		<section>
			<div className="mt-14 mb-9">
				<Title text="Projetos " />
			</div>
			{Object.entries(project).map(([category, items]) => (
				<div
					key={category}
					className="flex flex-wrap gap-6 items-center justify-center md:justify-start"
				>
					{items.map((item) => (
						<a key={item.alt} href={item.link}>
							<img
								src={item.src}
								alt={item.alt}
								className="rounded-2xl border transition ease-in-out hover:-translate-y-2 cursor-pointer"
							/>
						</a>
					))}
				</div>
			))}
		</section>
	);
}
