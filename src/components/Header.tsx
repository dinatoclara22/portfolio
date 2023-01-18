import Button from "./Button";

export default function Header() {
	return (
		<header className="flex flex-col md:flex-row justify-center items-center">
			<img className="mb-8 h-[220px]" src="/assets/memoji_2.png" alt="Imagem de Perfil" />
			<section className="flex flex-col md:ml-10">
				<h1 className="text-[26px] text-center md:text-left md:text-3xl font-bold mb-4">
					Hey, I&apos;m Clara Dinato👋
				</h1>

				<p className="mb-4 text-center md:text-left">
					I&apos;m a{" "}
					<span className="text-indigo-500 font-bold">Front End Developer</span>{" "}
					majoring in Software Engineering. I have almost a year of experience
					in the company Semove where I build websites. I have{" "}
					<span className="text-indigo-500 font-bold">Front End Skills</span> in
					HTML, CSS/SASS, JavaScript, Bootstrap, Tailwind and ReactJS. I&apos;m
					always keen to learn something new and always trying to be updated
					with the technological news.
				</p>

				<div className="flex gap-3 justify-center md:justify-start">
					<Button
						text="Contact Me"
						href="mailto:contatodinatoclara@gmail.com"
					/>
					<Button
						text="CV"
						href="https://drive.google.com/file/d/1qoRrWolZ3G2yGtPaYQ6kVNrrj_BUcXiU/view?usp=sharing"
					/>
				</div>
			</section>
		</header>
	);
}
