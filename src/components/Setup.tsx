import Title from "./Title";
import setup from "../data/setup.json";

export default function Setup() {
	return (
		<section className="mt-14">
			<Title text="Setup" className="mb-2"/>
			{Object.entries(setup).map(([category, items]) => (
				<div key={category}>
					<h2 className="text-xl mt-6 mb-4 font-medium border-b-2 border-indigo-500 w-min">
						{category}
					</h2>
					<ul className="mt-2">
						{items.map((item) => (
							<li key={item.name} className="mb-1 ml-6 list-disc">
								<a
									className="hover:text-indigo-600 transition-all duration-300"
									href={item.link}
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
}
