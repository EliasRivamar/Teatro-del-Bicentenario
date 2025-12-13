import { DakksLogo } from '../../icons/Dakks.jsx'

export function Honorifics() {
  return (
    <div className="flex flex-col bg-black lg:h-screen min-h-full py-8 px-15 snap-start snap-always">
      <div className="mt-15">
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex items-start gap-4 group">
              <img
                src="/1-logo.png"
                alt="Premio Provincial a la Calidad 2019"
                className="w-18"
              />
              <div>
                <p className="font-display text-xl text-white leading-tight mb-1">
                  Premio Provincial a la
                </p>
                <p className="font-display text-xl text-white font-bold leading-tight group-hover:text-primary transition-colors duration-400">
                  Calidad 2019
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <img
                src="/teatro-icon.png"
                alt="Premio Nacional a la Calidad 2021"
                className="w-18"
              />
              <div>
                <p className="font-display text-xl text-white leading-tight mb-1">
                  Premio Nacional a la Calidad
                </p>
                <p className="font-display text-xl text-white font-bold leading-tight group-hover:text-amber-700 transition-colors duration-400">
                  Medalla de Bronce 2021
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <img
                src="/clasica-icon.png"
                alt="Premio Nacional a la Calidad 2021"
                className="w-18"
              />
              <div>
                <p className="font-display text-xl text-white leading-tight mb-1">
                  Premio Nacional
                </p>
                <p className="font-display text-xl text-white font-bold leading-tight group-hover:text-primary transition-colors duration-400">
                  Clásica 2022
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <img src='/teatro-icon.png' alt='Premio Nacional a la Calidad 2021' className='w-18'/>
              <div>
                <p className="font-display text-xl text-white leading-tight mb-1">
                  Premio Nacional a la Calidad
                </p>
                <p className="font-display text-xl text-white font-bold leading-tight group-hover:text-gray-500 transition-colors duration-400">
                  Medalla de Plata 2022
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-linear-to-r from-transparent via-gray-800 to-transparent mt-5 mb-5"></div>
        </div>
        <div>
          <div className='flex flex-col lg:flex-row mx-auto place-items-center place-content-center gap-5'>
            <div className="lg:w-1/2">
              <p className="font-serif text-lg md:text-[1rem] text-gray-400 leading-relaxed italic">
                        "El Teatro del Bicentenario de San Juan es parte de Ópera Latinoamérica (OLA) una red que reúne a más de 50 teatros, compañías y festivales de Iberoamérica y el Caribe, con el propósito de promover las artes escénicas clásicas en la región."
              </p>
            </div>
            <img src='ola-logo.png' alt='OLA Logo' className=' w-full lg:w-[60%] md:h-40 h-20'/>
          </div>
          <div className="w-full h-px bg-linear-to-r from-transparent via-gray-800 to-transparent mt-5 mb-5"></div>
        </div>
        <div>
          <div className='grid grid-cols-2 lg:flex mx-auto place-items-center place-content-center gap-5'>
            <p className='font-display text-gray-400 leading-relaxed text-md text-center col-start-1 col-end-3'>Gestión y operación del espacio artístico, formativo y cultural del Teatro del Bicentenario.</p>
            <img src='tuv-logo.png' alt='TUV Logo' className='w-14 h-16'/>
            <img src='iso-logo.png' alt='TUV Logo' className='w-14 h-16'/>
            <img src='IAF-logo.png' alt='TUV Logo' className='w-14 h-16'/>
            <img src='oaa-logo.png' alt='TUV Logo' className='w-18 h-16'/>
            <DakksLogo/>
          </div>
        </div>
      </div>
    </div>
  )
}
