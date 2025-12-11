export function News() {
  return (
    <div className="flex flex-col bg-black lg:h-screen min-h-full py-8 px-15 snap-start snap-always">
      <div className="mt-15">
        <header className="flex justify-between items-end mb-8">
          <h2 className="font-display text-4xl lg:text-5xl text-gray-100 font-light tracking-wide">
            Novedades del Teatro
          </h2>
          <a
            className="group relative inline-flex items-center gap-3 px-8 py-3 border border-white/10 hover:border-primary/70 rounded-sm transition-all duration-300 mt-8 md:mt-0 overflow-hidden"
            href="#"
          >
            <span className="absolute inset-0 bg-primary/70 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out origin-left"></span>
            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors">
              Todas las Novedades
            </span>
            {/* <span className='relative z-10 material-symbols-outlined text-lg text-white group-hover:text-black transition-colors'>
            calendar_month
          </span> */}
          </a>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          <article className="group flex flex-col rounded-xl">
            <div className="relative overflow-hidden rounded-xl mb-6">
              <a
                className="flex border rounded-xl overflow-hidden border-white/5 group-hover:border-primary/40 transition-all duration-700"
                href="#"
              >
                <img
                  src="/MuestraDanza.jpg"
                  className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-105 rounded-xl"
                  alt="Muestra De Danza"
                  width={380}
                />
              </a>
            </div>
            <div className="flex flex-col pr-4">
              <a className="font-display text-lg lg:text-xl font-medium text-white mb-4 uppercase tracking-wider leading-relaxed group-hover:text-primary duration-700 transition-all cursor-pointer">
                MUESTRA DEL PROGRAMA DE DANZA
              </a>
              <p className="text-gray-300 text-[15px] leading-relaxed font-light font-body">
                El Teatro del Bicentenario presenta la Muestra del Programa de
                Danza dirigida por Victoria Balanza...
              </p>
            </div>
          </article>

          <article className="group cursor-pointer flex flex-col">
            <div className="relative overflow-hidden rounded-xl mb-6">
              <a
                className="flex border rounded-xl overflow-hidden border-white/5 group-hover:border-primary/40 transition-all duration-700"
                href="#"
              >
                <img
                  src="/Convocatoria2026.jpg"
                  className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-105 rounded-xl"
                  alt="Convocatoria 2026"
                  width={380}
                />
              </a>
            </div>
            <div className="flex flex-col pr-4">
              <a className="font-display text-lg lg:text-xl font-medium text-white mb-4 uppercase tracking-wider leading-relaxed group-hover:text-primary duration-700 transition-all cursor-pointer">
                EL TEATRO DEL BICENTENARIO ABRE CONVOCATORIA PARA FORMAR PARTE
                DE LA PROGRAMACIÓN 2026 DE SALA AUDITÓRIUM
              </a>
              <p className="text-gray-300 text-[15px] leading-relaxed font-light font-body">
                En vísperas de la décima temporada, el Teatro del Bicentenario,
                dependiende del Miniterio de Turi...
              </p>
            </div>
          </article>

          <article className="group cursor-pointer flex flex-col">
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <a
                className="flex border rounded-xl overflow-hidden border-white/5 group-hover:border-primary/40 transition-all duration-700"
                href="#"
              >
                <img
                  src="/AgendaDiciembre.jpg"
                  className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Agenda Diciembre 2025"
                  width={380}
                />
              </a>
            </div>
            <div className="flex flex-col pr-4">
              <a className="font-display text-lg lg:text-xl font-medium text-white mb-4 uppercase tracking-wider leading-relaxed group-hover:text-primary duration-700 transition-all cursor-pointer">
                DICIEMBRE EN EL TEATRO DEL BICENTENARIO
              </a>
              <p className="text-gray-300 text-[15px] leading-relaxed font-light font-body">
                La música, el teatro y la formación artistica iluminan
                #NuestroTeatro El Teatro del Bicentenario, de...
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
