import Button from "./Button";

export default function Header() {
	return (
		<header className="flex flex-col md:flex-row justify-center items-center">
			<img
				className="mb-8 h-[220px]"
				src="/assets/memoji_2.PNG"
				alt="Imagem de Perfil"
			/>
			<section className="flex flex-col md:ml-10">
				<h1 className="text-[26px] text-center md:text-left md:text-3xl font-bold mb-4">
					Olá, dev!👋
				</h1>

				<p className="mb-4 text-center md:text-left">
				Me chamo Clara Dinato, sou Estagiária na <span className="text-indigo-500 font-bold">Globo</span> em Engenharia de Dados e estou me graduando em Engenharia de Software. Meu último projeto foi o site <a className="text-indigo-500 font-bold" href="https://faleonibus.com.br/">Fale Ônibus</a> onde atuei como front-end.
				</p>

				<div className="flex gap-3 justify-center md:justify-start">
					<Button
						text="E-mail"
						href="mailto:contatodinatoclara@gmail.com"
					/>
				</div>
			</section>
		</header>
	);
}
