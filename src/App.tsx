import FindMe from "./components/FindMe/FindMe";
import Header from "./components/Header";
import ProgrammingLanguage from "./components/ProgrammingLangueages";
import Setup from "./components/Setup";
import Works from "./components/Works";

export default function App() {
	return (
		<div className=" bg-indigo-50 flex justify-center items-center">
			<div className="bg-white md:my-20 rounded-2xl py-10 md:py-14 px-6 w-[880px] md:w-[1000px] md:px-14">
				<div>
					<Header />
					<div className="my-14 border-t-2 border-[#E9E9E9]" />
					<ProgrammingLanguage />
					<Works />
					<Setup />
					<FindMe />
				</div>
			</div>
		</div>
	);
}
