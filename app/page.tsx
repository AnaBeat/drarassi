"use client";

import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const whatsappLink =
  "https://wa.me/5562996868667?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20para%20fortalecimento%20do%20assoalho%20p%C3%A9lvico.";

const instagramLink = "https://www.instagram.com/drafernandarassi/";

const endereco =
  "Rua A, 407, Ed. Centro Médico, Setor Oeste, Goiânia - GO, CEP 75360-223";

const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Rua+A%2C+407%2C+Ed.+Centro+M%C3%A9dico%2C+Setor+Oeste%2C+Goi%C3%A2nia";

const navLinks = [
  { href: "#tecnologia", label: "A tecnologia" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#medica", label: "Sobre a médica" },
];

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <main className="min-h-screen bg-[#F8F1E8] text-[#302720]">
      {/* HERO */}
      <section
        className="relative flex min-h-screen flex-col overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/image-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#F8F1E8]/95 via-[#F8F1E8]/80 to-[#F8F1E8]/10" />

        {/* CABEÇALHO */}
        <header className="relative z-20 border-b border-[#8B7257]/20 bg-[#F8F1E8]/25">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 lg:px-10">
            <a href="#" className="flex flex-col">
              <span className="font-serif text-xl font-medium leading-tight tracking-[0.01em] text-[#302720] sm:text-2xl">
                Dra. Fernanda Rassi
              </span>

              <span className="mt-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[#756D73] sm:text-[10px]">
                <span className="h-px w-5 bg-[#BE9D70]" />
                Ginecologia & Obstetrícia
              </span>
            </a>

            {/* MENU DESKTOP */}
            <nav className="hidden items-center gap-7 text-sm lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300 hover:text-[#A78655]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-[#302720] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#514334] sm:inline-flex sm:text-sm"
              >
                Agendar consulta
              </a>

              {/* BOTÃO MENU MOBILE */}
              <button
                type="button"
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuAberto}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B7257]/40 text-[#302720] transition hover:bg-white/50 lg:hidden"
              >
                <span className="text-2xl leading-none">
                  {menuAberto ? "×" : "☰"}
                </span>
              </button>
            </div>
          </div>

          {/* NAVEGAÇÃO MOBILE */}
          {menuAberto && (
            <nav className="absolute left-0 right-0 top-full flex flex-col gap-4 border-t border-[#8B7257]/20 bg-[#FBF8F4] px-6 py-6 shadow-lg lg:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={fecharMenu}
                  className="text-sm transition-colors duration-300 hover:text-[#A78655]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={fecharMenu}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#302720] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#514334]"
              >
                Agendar consulta
              </a>
            </nav>
          )}
        </header>

        {/* CONTEÚDO HERO */}
        <div className="relative z-10 flex flex-1 items-center">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#BE9D70]">
                Cuidado com a saúde íntima feminina
              </p>

              <h1 className="font-serif text-4xl leading-tight text-[#302720] md:text-6xl">
                Mais confiança para viver sem o receio dos escapes urinários.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#756D73] md:text-lg">
                Perdas de urina ao rir, tossir, espirrar ou fazer esforços
                merecem atenção. Conheça uma possibilidade de tratamento para o
                fortalecimento do assoalho pélvico, com avaliação médica
                individualizada.
              </p>

              <a
                href="#contato"
                className="mt-8 inline-flex rounded-full bg-[#BE9D70] px-8 py-4 font-semibold text-white transition hover:bg-[#a88a60]"
              >
                Agende uma avaliação
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO TECNOLOGIA */}
      <section id="tecnologia" className="bg-[#FBF8F4] px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#BE9D70]">
              Tecnologia de fortalecimento pélvico
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#302720] md:text-5xl">
              Um cuidado que atua na musculatura do assoalho pélvico
            </h2>

            <p className="mt-6 leading-8 text-[#756D73]">
              O assoalho pélvico é formado por músculos que ajudam a sustentar
              os órgãos da região e participam do controle urinário. Quando essa
              musculatura está enfraquecida, podem ocorrer perdas involuntárias
              de urina.
            </p>

            <p className="mt-4 leading-8 text-[#756D73]">
              A estimulação eletromagnética de alta intensidade provoca
              contrações involuntárias da musculatura pélvica. O tratamento
              busca auxiliar no fortalecimento dessa região e pode ser
              considerado após avaliação médica.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F0E7DC] p-8 md:p-10">
            <h3 className="font-serif text-2xl text-[#302720]">
              Como é a sessão?
            </h3>

            <ul className="mt-6 space-y-4 text-[#756D73]">
              <li>
                <span className="font-semibold text-[#302720]">
                  Você permanece vestida.
                </span>{" "}
                A sessão é realizada sentada, sem necessidade de agulhas.
              </li>

              <li>
                <span className="font-semibold text-[#302720]">
                  A musculatura é estimulada.
                </span>{" "}
                A tecnologia promove contrações involuntárias do assoalho
                pélvico.
              </li>

              <li>
                <span className="font-semibold text-[#302720]">
                  Protocolo de tratamento.
                </span>{" "}
                São 6 sessões de aproximadamente 28 minutos, realizadas 2 vezes
                por semana, conforme a avaliação e orientação médica.
              </li>

              <li>
                <span className="font-semibold text-[#302720]">
                  A indicação é individualizada.
                </span>{" "}
                A avaliação profissional define se o tratamento é adequado para
                cada caso.
              </li>
            </ul>

            <a
              href="#contato"
              className="mt-8 inline-flex rounded-full bg-[#BE9D70] px-7 py-3 font-semibold text-white transition hover:bg-[#a88a60]"
            >
              Saiba se o tratamento é indicado
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO BENEFÍCIOS */}
      <section id="beneficios" className="bg-[#F8F1E8] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#BE9D70]">
              Você não precisa ignorar os sintomas
            </p>

            <h2 className="font-serif text-3xl text-[#302720] md:text-5xl">
              Quando pequenos escapes começam a limitar sua rotina
            </h2>

            <p className="mt-5 leading-8 text-[#756D73]">
              A perda urinária pode afetar a segurança e a liberdade de realizar
              atividades do dia a dia. Uma avaliação médica ajuda a entender o
              que está acontecendo e quais cuidados podem ser indicados.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ao rir ou tossir",
                description:
                  "Pequenos escapes durante risadas, espirros, tosse ou outros esforços podem ser sinais de incontinência urinária.",
              },
              {
                title: "Durante caminhadas e exercícios",
                description:
                  "O receio de perder urina pode fazer você evitar atividades que antes eram prazerosas.",
              },
              {
                title: "Ao sentir urgência para urinar",
                description:
                  "A vontade súbita de ir ao banheiro, especialmente quando é difícil chegar a tempo, também merece avaliação.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#E1D5C6] bg-white p-8"
              >
                <h3 className="font-serif text-2xl text-[#302720]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#756D73]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE A MÉDICA */}
      <section
        id="medica"
        className="scroll-mt-8 bg-[#FBF8F4] px-6 py-20 sm:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A78655]">
              Sobre a médica
            </p>

            <h2 className="mt-5 font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Um olhar atento à saúde da mulher.
            </h2>

            <div className="mt-7 h-px w-12 bg-[#C5A46D]" />

            <p className="mt-7 text-base leading-8 text-[#756D73]">
              A Dra. Fernanda Rassi Alvarenga é médica ginecologista e obstetra,
              com atuação voltada ao cuidado da saúde da mulher em diferentes
              fases da vida.
            </p>

            <p className="mt-4 text-base leading-8 text-[#756D73]">
              Seu campo de atuação inclui obstetrícia de alto e baixo risco,
              histeroscopia, ginecologia funcional e estética e reposição
              hormonal médica.
            </p>

            <div className="mt-8 border-l-2 border-[#BE9D70] pl-5">
              <p className="font-serif text-xl text-[#302720]">MD, PhD</p>

              <p className="mt-2 text-sm leading-7 text-[#756D73]">
                Professora de Medicina na UniRV
              </p>

              <p className="mt-3 text-sm font-medium tracking-wide text-[#A78655]">
                CRM-GO 7931 · RQE 3747
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#302720] transition-colors duration-300 hover:text-[#A78655]"
            >
              Entre em contato
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto flex aspect-4/5 w-full max-w-md items-center justify-center overflow-hidden rounded-t-[48%] rounded-b-4xl border border-[#E7DCCF] bg-[#F0E7DC] p-8">
              <div className="absolute inset-5 rounded-t-[48%] rounded-b-4xl border border-[#C5A46D]/50" />

              <div className="relative text-center">
                <p className="font-serif text-5xl text-[#A78655]">FR</p>

                <div className="mx-auto mt-4 h-px w-12 bg-[#C5A46D]" />

                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#756D73]">
                  Espaço para fotografia
                </p>

                <p className="mt-2 text-sm text-[#756D73]">
                  Retrato profissional da médica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-[#302720] px-6 py-12 text-[#D8C4A4] sm:py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <a href="#" className="inline-flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl">
                  Dra. Fernanda Rassi
                </span>

                <span className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#D8C4A4]">
                  <span className="h-px w-5 bg-[#BE9D70]" />
                  Ginecologia & Obstetrícia
                </span>
              </a>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#D8C4A4]">
                Cuidado individualizado e acolhimento para a saúde da mulher em
                diferentes fases da vida.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#D8C4A4]">
                MD, PhD · Professora de Medicina — UniRV
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C4A4]">
                  Navegação
                </h2>

                <ul className="mt-4 space-y-3 text-sm">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8C4A4]">
                  Contato
                </h2>

                <div className="mt-5 flex items-start gap-2">
                  <span aria-hidden="true">📍</span>

                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 transition-colors duration-300 hover:text-white"
                  >
                    {endereco}
                  </a>
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Dra. Fernanda"
                    className="inline-flex text-[#D8C4A4] transition-all duration-300 hover:scale-110 hover:text-white"
                  >
                    <FaInstagram size={22} />
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp da Dra. Fernanda"
                    className="inline-flex text-[#D8C4A4] transition-all duration-300 hover:scale-110 hover:text-white"
                  >
                    <FaWhatsapp size={22} />
                  </a>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#D8C4A4]">
                  Para informações sobre consultas e tratamentos, entre em
                  contato com a equipe.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D8C4A4] transition-colors duration-300 hover:text-white"
                >
                  Falar com a equipe
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/15 pt-6">
            <p className="text-xs leading-6 text-[#D8C4A4]">
              Dra. Fernanda Rassi Alvarenga · CRM-GO 7931 · RQE 3747
            </p>

            <p className="mt-2 text-xs leading-6 text-[#D8C4A4]">
              As informações deste site são educativas e não substituem
              consulta, diagnóstico ou orientação médica individualizada.
            </p>

            <p className="mt-4 text-xs text-[#D8C4A4]">
              © 2026 Dra. Fernanda Rassi. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
