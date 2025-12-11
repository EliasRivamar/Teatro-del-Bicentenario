import { Difumination } from '../components/Difumination'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header/Header'
import { News } from '../components/Home/News'

function App() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Header />
      <section className="relative h-screen snap-start snap-always">
        <img
          alt="Interior del Teatro del Bicentenario con asientos rojos y arquitectura de madera"
          className="size-170 lg:size-160 lg:w-full w-full object-cover object-center transform transition-transform duration-[20s] absolute inset-0 opacity-80 z-0"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnJsSsgc1YDeS7O1WELqlHd1XXwdHrRmgdWoqbHxXs2gYZ-aexWxPecC1a8DVTCmECsYL9SLDzIEB7o7wxU8jQiSjGmRMKP98vRchqsEazfgsk4DaP6XnViXvTlYnCnRHLq0cySkwsV9q_0VHfwsDr-fDDtG9uQ29H0r6BA0uIgb5uHGnAsYbMWvwvZrO2FwQop0lnyCNEWHjmpdUbNySkJu9usOg7J6pm4wXd2yFWkoBQg3bjID7mMFJ7OaeGtiuC0-S46rbgsbQ"
        />
        <div className="relative flex flex-col z-20">
          <div className=" mt-50 lg:mt-30 flex flex-col place-content-center place-items-center">
            <h1 className="font-display font-bold text-2xl md:text-7xl lg:text-7xl text-center text-white tracking-wide leading-[1.1] drop-shadow-2xl animate-fade-in-up">
              BIENVENIDOS AL <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-[#F5D76E] to-white animate-fade-in-up delay-1000">
                TEATRO DEL BICENTENARIO
              </span>
            </h1>
            <div className="w-32 h-1.5 bg-primary mt-8 mb-8 rounded-full animate-fade-in-up shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
            <h2 className="font-body font-light text-sm md:text-3xl text-gray-200 tracking-[0.4em] uppercase delay:1000 animate-fade-in-up">
              San Juan - Argentina
            </h2>
          </div>
          <div className="flex place-content-center place-items-center mt-65 lg:mt-40">
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 z-10 text-white flex flex-col items-center animate-bounce opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="text-[0.65rem] uppercase tracking-[0.3em] mb-3 font-light">
                Deslizar
              </span>
              {/* <span className="material-symbols-outlined text-3xl">
                keyboard_arrow_down
              </span> */}
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-full lg:h-screen snap-start snap-always">
        <News />
      </section>
      <section className="min-h-full lg:h-screen snap-start snap-always">
        <img src="/premios.png" alt="Premios Teatro del Bicentenario" />
      </section>
    </main>
  )
}

export default App
