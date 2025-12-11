export function DropDown({ title }) {
  return (
    <div className="text-white font-body text-md rounded-xl  py-1 px-2 relative group place-items-center place-content-center duration-600 transition-all hover:text-amber-600">
      {title}
      <div className="absolute text-md py-1 px-2 hidden group-hover:block rounded-xl w-45 left-0 bg-[rgb(36,36,36)]">
        {title === 'Teatro' ? (
          <div className='-bottom-15'>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Historia - Patrimonio</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>El Complejo</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Sistema de Gestión de Calidad</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Autoridades</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Nuestro Teatro</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>TB Digital</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Normas de Sala</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Horarios</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Contacto</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Libro Teatros IberoAmericanos</p>
          </div>
        ) : title === 'Visitas Guiadas' ? (
          <div>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Visitas Guiadas</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Visita 360°</p>
          </div>
        ) : title === 'Formá Parte' ? (
          <div>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Convocatorias</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programa Canto Popular</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programa de Formación y Desarrollo Profesional para Bailarines</p>
          </div>
        ) : title === 'Programación' ? (
          <div>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programación 2025</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programación 2024</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programación 2023</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programación 2022</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programación 2021</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programación 2020</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programación 2019</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programación 2018</p>
            <p className='hover:bg-white/10 px-2 py-1 rounded-xl'>Programación 2017</p>
          </div>
        ) :''}
      </div>
    </div>
  )
}
