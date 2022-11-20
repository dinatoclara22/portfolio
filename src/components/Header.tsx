import profileImg from "/assets/profile-img.svg";
import Button from "./Button";

export default function Header() {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center">
			<img
				className="mb-8 w-[152px] h-[152px] rounded-full"
				src={profileImg}
				alt="Imagem de Perfil"
			/>
			<div className="flex flex-col ml-10">
				<h1 className="text-3xl font-bold mb-4">
					Hey, I&apos;m Clara Dinato 👋
				</h1>
				<p className="mb-4">
					I&apos;m a{" "}
					<span className="text-indigo-500 font-bold">Front End Developer</span>{" "}
					majoring in Software Engineering. I have almost a year of experience
					in the company Semove where I build websites. I have{" "}
					<span className="text-indigo-500 font-bold">Front End Skills</span>
					in HTML, CSS/SASS, JavaScript, Bootstrap, Tailwind and ReactJS.
					I&apos;m always keen to learn something new and always trying to be
					updated with the technological news.
				</p>
				<div className="flex flex-col md:flex-row gap-3">
					<Button
						text="Contact Me"
						href="mailto:contatodinatoclara@gmail.com"
					/>
					<Button
						text="CV"
						href="https://drive.google.com/file/d/1qoRrWolZ3G2yGtPaYQ6kVNrrj_BUcXiU/view?usp=sharing"
					/>
					{/* <Button text='CV' href=''/> */}
				</div>
			</div>
		</div>
	);
}
