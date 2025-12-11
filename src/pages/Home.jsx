import { CurtainLoader } from '../components/CurtainLoader'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header/Header'
import { Events } from '../components/Home/Events'
import { News } from '../components/Home/News'
import { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(true)
  return (
    <>
      {loading && <CurtainLoader onFinish={() => setLoading(false)} />}

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
              <h1 className="font-display font-bold text-2xl md:text-7xl lg:text-7xl text-center text-white tracking-wide leading-[1.1] drop-shadow-2xl animate-fade-in-up delay-4000">
                BIENVENIDOS AL <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-[#F5D76E] to-white animate-fade-in-up delay-4000">
                  TEATRO DEL BICENTENARIO
                </span>
              </h1>
              <div className="w-32 h-1.5 bg-primary mt-8 mb-8 rounded-full animate-fade-in-up shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
              <h2 className="font-body font-light text-sm md:text-3xl text-gray-200 tracking-[0.4em] uppercase delay-4000 animate-fade-in-up">
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
          <Events />
        </section>
        <section className="min-h-full lg:h-screen snap-start snap-always">
          <div className="flex flex-col bg-black lg:h-screen min-h-full py-8 px-15 snap-start snap-always">
            <div className="mt-15">
              <header className="flex justify-between items-end mb-10">
                <h2 className="font-display text-4xl lg:text-5xl text-gray-100 font-light tracking-wide">
                  Honorificos
                </h2>
              </header>
              <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div class="max-w-[1400px] mx-auto relative z-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div class="flex flex-col items-start gap-4 group">
                    {/* <span class="material-symbols-outlined text-6xl text-gray-600 group-hover:text-primary transition-colors duration-500">
                    emoji_events
                  </span> */}
                    <div>
                      <p class="font-display text-xl text-white leading-tight mb-1">
                        Premio Provincial a la
                      </p>
                      <p class="font-display text-xl text-white font-bold leading-tight group-hover:text-primary transition-colors">
                        Calidad 2019
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col items-start gap-4 group">
                    {/* <span class="material-symbols-outlined text-6xl text-gray-600 group-hover:text-primary transition-colors duration-500">
                    theater_comedy
                  </span> */}
                    <div>
                      <p class="font-display text-xl text-white leading-tight mb-1">
                        Premio Nacional a la Calidad
                      </p>
                      <p class="font-display text-xl text-white font-bold leading-tight group-hover:text-primary transition-colors">
                        Medalla de Bronce 2021
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col items-start gap-4 group">
                    {/* <span class="material-symbols-outlined text-6xl text-gray-600 group-hover:text-primary transition-colors duration-500">
                    article
                  </span> */}
                    <div>
                      <p class="font-display text-xl text-white leading-tight mb-1">
                        Premio Nacional
                      </p>
                      <p class="font-display text-xl text-white font-bold leading-tight group-hover:text-primary transition-colors">
                        Clásica 2022
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-col items-start gap-4 group">
                    {/* <span class="material-symbols-outlined text-6xl text-gray-600 group-hover:text-primary transition-colors duration-500">
                    military_tech
                  </span> */}
                    <div>
                      <p class="font-display text-xl text-white leading-tight mb-1">
                        Premio Nacional a la Calidad
                      </p>
                      <p class="font-display text-xl text-white font-bold leading-tight group-hover:text-primary transition-colors">
                        Medalla de Plata 2022
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full h-px bg-linear-to-r from-transparent via-gray-800 to-transparent mt-20"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-full lg:h-screen snap-start snap-always">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
