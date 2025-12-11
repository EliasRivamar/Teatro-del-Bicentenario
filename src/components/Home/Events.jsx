import { Articles } from './ArticleEvents'

export function Events() {
  return (
    <div className='flex flex-col bg-black lg:h-screen min-h-full py-8 px-15 snap-start snap-always'>
      <div className='flex flex-col md:flex-row justify-between items-end mt-15 mb-6'>
        <div>
          <span className='text-primary text-xs font-bold tracking-[0.3em] uppercase block mb-3 pl-1'>
            Temporada 2025
          </span>
          <h2 className='font-display text-4xl lg:text-5xl text-gray-100 font-light tracking-wide'>
            Próximos Eventos
          </h2>
        </div>
        <a
          className='group relative isolate inline-flex items-center gap-3 px-8 py-3 border border-white/10 hover:border-primary/70 rounded-sm transition-all duration-300 mt-8 md:mt-0 overflow-hidden'
          href='#'
        >
          <span className='absolute inset-0 bg-primary/70 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out origin-left'></span>
          <span className='z-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors'>
            Ver Calendario
          </span>
          {/* <span className='relative z-10 material-symbols-outlined text-lg text-white group-hover:text-black transition-colors'>
            calendar_month
          </span> */}
        </a>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        
        <Articles image={'https://lh3.googleusercontent.com/aida-public/AB6AXuAj6-ugoF9TArwirq71da6mdp9aZGFqryWHBP4D1lZh_SEfWC8GFgN9GD7naRutYFMuMkZo7-ieHfmdzGAyI7UTLQTzYNQqrNDcV6wi5OnOSw_UsiH3igsxjIjDyPLdKFUwRs1BcLsVoboA2aUTq6uY8anEELdCzJ_K0rYmCA26sJnepVoRURD2pet4ZtKGTTeuJL7yo3gAOsL6Ryn_CoPqrDIbRP_TYtMeF_cJBAl3L6FSJadze1HPAoS_V2uZDjD7apJVWo9mLr4'} day={'12'} month={'Nov'} category={'Ballet'} title={'El Lago de los Cisnes'} description={'La compañía nacional de danza presenta este clásico inmortal con una nueva puesta...'} location={'Sala Principal'}/>

        <Articles image={'/operaGala.webp'} day={'24'} month={'Nov'} category={'Concierto'} title={'Gala Lírica de Primavera'} description={'Una noche inolvidable on las mejores voces de la región interpretando arias de Verdi, Pucci...'} location={'Sala Principal'}/>

        <Articles image={'/Hamlet.png'} day={'05'} month={'Dic'} category={'Teatro'} title={'Hamlet: El Príncipe'} description={'La tragedia de Shakespeare cobra vida en una adaptación contemporánea, visceral y profundamente conmovedora...'} location={'Sala Auditórium'}/>

        <Articles image={'/jazz.jpg'} day={'18'} month={'Dic'} category={'Música'} title={'Noche de Jazz & Soul'} description={'Disfruta de una velada íntima con los mejores exponentes del jazz internacional en nuestra sala...'} location={'Sala Auditórium'}/> 
      </div>
    </div>
  )
}
