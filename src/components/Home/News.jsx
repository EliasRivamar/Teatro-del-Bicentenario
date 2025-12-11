export function News() {
  return (
    <div className="flex flex-col bg-black lg:h-screen min-h-full py-8 px-15 snap-start snap-always">
      <div className="mt-15">
        <header className='flex justify-between'>
          <h1 className="text-2xl mb-5 mx-2 font-extralight">Novedades del Teatro</h1>
          <h1 className="text-2xl mb-5 mx-2 font-extralight">Todas</h1>
        </header>
        <div className="flex-col flex lg:flex-row gap-6 place-items-center place-content-center">
          <div className="w-85 lg:w-100 bg-black rounded-xl lg:h-100 p-2 hover:scale-105 duration-600 transition-all active:scale-90 group">
            <a href="#">
              <img
                src="/MuestraDanza.jpg"
                className="rounded-xl"
                alt="Muestra De Danza"
                width={380}
              />
            </a>
            <a
              href="#"
              className="flex place-content-center place-items-center text-xl mt-4 mb-3 duration-600 transition-all  group-hover:text-amber-600  font-light"
            >
              MUESTRA DEL PROGRAMA DE DANZA
            </a>
            <p className='font-extralight text-sm'>
              El Teatro del Bicentenario presenta la Muestra del Programa de
              Danza dirigida por Victoria Balanza...
            </p>
          </div>
          <div className="w-85 lg:w-100 bg-black rounded-xl h-100 mt-8 lg:mt-0 p-2 hover:scale-105 duration-600 transition-all active:scale-90 group">
            <a href="#">
              <img
                src="/Convocatoria2026.jpg"
                className="rounded-xl"
                alt="Convocatoria 2026"
                width={380}
              />
            </a>
            <a
              href="#"
              className="flex place-items-center place-content-center text-xl mt-4 mb-3 duration-600 transition-all group-hover:text-amber-600 font-light"
            >
              EL TEATRO DEL BICENTENARIO ABRE CONVOCATORIA PARA FORMAR PARTE DE LA PROGRAMACIÓN 2026 DE SALA AUDITÓRIUM
            </a>
            <p className='font-extralight text-sm'>
              En vísperas de la décima temporada, el Teatro del Bicentenario, dependiende del Miniterio de Turi...
            </p>
          </div>
          <div className="w-85 lg:w-100 bg-black rounded-xl mt-8 lg:mt-0 h-100 p-2 hover:scale-105 duration-600 transition-all active:scale-90 group">
            <a href="#">
              <img
                src="/AgendaDiciembre.jpg"
                className="rounded-xl"
                alt="Agenda Diciembre 2025"
                width={380}
              />
            </a>
            <a
              href="#"
              className="flex place-content-center place-items-center text-xl mt-4 mb-3 duration-600 transition-all group-hover:text-amber-600 font-light"
            >
              DICIEMBRE EN EL TEATRO DEL BICENTENARIO
            </a>
            <p className='font-extralight text-sm'>
              La música, el teatro y la formación artistica iluminan #NuestroTeatro El Teatro del Bicentenario, de...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
