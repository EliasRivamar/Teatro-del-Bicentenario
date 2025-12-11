export function Footer() {
  return (
    <footer className="flex flex-col bg-black lg:h-screen min-h-full py-8 px-15 snap-start snap-always">
      <div className="mt-15">
        <header className="flex justify-between items-end mb-8">
          <h2 className='font-display text-4xl lg:text-5xl text-gray-100 font-light tracking-wide'>
            Contacto
          </h2>
          <a
            className='group relative inline-flex items-center gap-3 px-8 py-3 border border-white/10 hover:border-primary/70 rounded-sm transition-all duration-300 mt-8 md:mt-0 overflow-hidden'
            href='#'
          >
            <span className='absolute inset-0 bg-primary/70 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out origin-left'></span>
            <span className='relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors'>
            Ubicación
            </span>
          </a>
        </header>
      </div>
    </footer>
  )
}
