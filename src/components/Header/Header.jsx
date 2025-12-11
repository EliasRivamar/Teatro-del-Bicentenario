import { DropDown } from './DropDown'

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-linear-to-b from-black/90 via-black/50 to-transparent pt-5 pb-4 place-items-center place-content-center">
      <button className="cursor-pointer absolute left-5">
        <img src="/logoteatro.png" alt="Logo Teatro del Bicententenario" />
      </button>
      <div className="hidden lg:flex gap-5 items-center ml-42 mt-2">
        <a
          className="text-white/90 hover:text-primary text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 relative group py-2"
          href="#"
        >
          Teatro
          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          className="text-white/90 hover:text-primary text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 relative group py-2"
          href="#"
        >
          Comprar Entradas
          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          className="text-white/90 hover:text-primary text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 relative group py-2"
          href="#"
        >
          Visitas Guiadas
          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          className="text-white/90 hover:text-primary text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 relative group py-2"
          href="#"
        >
          Formá Parte
          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          className="text-white/90 hover:text-primary text-sm font-medium tracking-[0.15em] uppercase transition-colors duration-300 relative group py-2"
          href="#"
        >
          Auditórium 2025
          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          className="text-primary hover:text-white border border-primary hover:border-white px-6 py-2 text-sm font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-sm"
          href="#"
        >
          Programación
          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  )
}
