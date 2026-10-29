const whatsappLink =
  "https://wa.me/5562000000000?text=Olá! Gostaria de saber mais sobre o tratamento para fortalecimento do assoalho pélvico.";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F1E8] text-[#302720]">
      <section
        className="relative flex min-h-screen flex-col overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/image-hero.jpg')" }}
      >
        {/* Camada para manter o texto legível */}
        <div className="absolute inset-0 bg-linear-to-r from-[#F8F1E8]/95 via-[#F8F1E8]/80 to-[#F8F1E8]/10" />

        {/* Cabeçalho */}
        <header className="relative z-10 border-b border-[#8B7257]/20 bg-[#F8F1E8]/25">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
            <a href="#" className="flex flex-col">
              <span className="font-serif text-xl leading-tight sm:text-2xl">
                Dra. Fernanda Rassi Alvarenga
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#756D73] sm:text-[10px]">
                Ginecologia & Obstetrícia
              </span>
            </a>

            <nav className="hidden items-center gap-7 text-sm lg:flex">
              <a href="#tecnologia" className="transition hover:text-[#A78655]">
                A tecnologia
              </a>
              <a href="#beneficios" className="transition hover:text-[#A78655]">
                Benefícios
              </a>
              <a href="#medica" className="transition hover:text-[#A78655]">
                Sobre a médica
              </a>
            </nav>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#302720] px-5 py-3 text-xs font-semibold text-white! transition hover:bg-[#514334] sm:text-sm"
            >
              Agendar consulta
            </a>
          </div>
        </header>

        {/* Hero*/}
        <div className="relative z-10 flex flex-1 items-center">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="max-w-2xl">
              <p className="mb-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#A78655] sm:text-sm">
                Saúde íntima feminina
              </p>

              <h1 className="font-serif text-5xl font-normal leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Mais bem-estar para todas as fases da sua vida.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#625951] sm:text-lg">
                Cuidado individualizado para a saúde do assoalho pélvico, com
                acolhimento, avaliação médica e tecnologia para promover mais
                qualidade de vida.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#302720] px-7 py-4 text-sm font-semibold text-white! transition hover:bg-[#514334]"
                >
                  Conheça o tratamento
                  <span aria-hidden="true" className="ml-3">
                    →
                  </span>
                </a>

                <a
                  href="#tecnologia"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#8B7257] px-7 py-4 text-sm font-semibold transition hover:bg-white/50"
                >
                  Saiba mais
                </a>
              </div>

              <p className="mt-8 text-xs tracking-wide text-[#756D73]">
                CRM-GO 7931 · RQE 3747
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção sobre a tecnologia */}
      <section
        id="tecnologia"
        className="bg-[#FBF8F4] px-6 py-20 sm:py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A78655]">
              Cuidado individualizado
            </p>

            <h2 className="mt-5 max-w-xl font-serif text-4xl font-normal leading-tight sm:text-5xl">
              Mais atenção à saúde do seu assoalho pélvico.
            </h2>

            <div className="mt-7 h-px w-12 bg-[#C5A46D]" />

            <p className="mt-7 max-w-xl text-base leading-8 text-[#756D73]">
              O assoalho pélvico tem um papel importante no suporte dos órgãos
              pélvicos e no controle urinário. Mudanças ao longo da vida podem
              afetar essa musculatura e o bem-estar.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#756D73]">
              A avaliação médica individualizada ajuda a compreender suas
              necessidades e a discutir as possibilidades de cuidado mais
              adequadas para você.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#302720] transition hover:text-[#A78655]"
            >
              Converse com a equipe
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-[#E7DCCF] bg-[#F0E7DC] p-8 sm:p-12">
            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#C5A46D]/40" />
            <div className="absolute -bottom-16 -left-12 h-56 w-56 rounded-full border border-[#C5A46D]/40" />

            <div className="relative flex min-h-64 flex-col justify-between sm:min-h-80">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A78655]">
                Saúde da mulher
              </span>

              <div>
                <p className="font-serif text-3xl leading-snug text-[#302720] sm:text-4xl">
                  Cuidado que considera você por inteiro.
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-[#756D73]">
                  Informação, escuta e orientação médica em cada etapa do seu
                  cuidado.
                </p>
              </div>

              <span className="text-sm tracking-[0.18em] text-[#A78655]">
                BEM-ESTAR · ACOLHIMENTO · SAÚDE
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
