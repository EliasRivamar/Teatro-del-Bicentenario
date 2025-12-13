import { FacebookIcon } from '../icons/Facebook'
import { InstagramIcon } from '../icons/Instagram'
import { LocationIcon } from '../icons/Location'
import { MailIcon } from '../icons/Mail'
import { PhoneIcon } from '../icons/Phone'
import { TwitterIcon } from '../icons/X'
import { YoutubeIcon } from '../icons/Youtube'

export function Footer() {
  return (
    <footer className="relative bg-black pt-40 flex pb-8">
      <img
        alt="Interior del Teatro del Bicentenario con asientos rojos y paneles de madera"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx6vRqHhc-i9kMbzV_holhvePRLyndkOGFbzVZ2LlhqiQRdBhBlIydM2PH4yRiMYpv79bPZc-LVBDzoYxUSmWLMe5zhyxy_BOUxOpOF3UUqFrlBVXeaRQ_f_4EBCMmZIefA3pVZkdsm_nyqgfkGp7B7Sc3ISQnAU4rJbdxxi_Q1wD-_C2687OS1EBPRJduXLJdBQPDsgrc0eBV1ceA1SGW7PFj1n1rsP4wgAwNUIh3ND9qPtyej31xjimuwA4aWSnh76EWREC9Lw"
        className="size-170 lg:size-160 lg:w-full w-full object-cover object-center absolute inset-0 opacity-80 z-0"
      />
      <div className="absolute inset-0 size-170 lg:size-160 lg:w-full w-full bg-black/60 bg-theater-gradient"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex place-content-center pb-9">
          <img src="/logoGobierno.png" alt="Ministerio"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10 items-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <img src='/logoteatro.png' alt='Teatro del Bicentenario' />
            <p className="text-gray-300 font-light text-sm leading-relaxed max-w-xs font-display">
              Un espacio de encuentro para la cultura y las artes escénicas en
              el corazón de San Juan.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-bold tracking-[0.2em] uppercase text-primary mb-2 font-display">
              Contacto
            </h3>
            <div className="flex flex-col items-center gap-2 text-sm text-gray-300 font-display">
              <p className="hover:text-primary/50 flex gap-1 transition-colors cursor-default">
                <LocationIcon/> Las
                Heras Sur 430, San Juan, Argentina
              </p>
              <p className="hover:text-primary/50 transition-colors">
                <a href="tel:+542644276438" className=' flex gap-1'>
                  <PhoneIcon/> +54 264 427
                  6438
                </a>
              </p>
              <p className="hover:text-primary/50 transition-colors">
                <a href="mailto:info@teatrobicentenariosanjuan.org" className=' flex gap-1'>
                  <MailIcon/>
                  info@teatrobicentenariosanjuan.org
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-xl font-display font-bold tracking-[0.2em] uppercase text-primary mb-2">
              Síguenos
            </h3>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 hover:bg-primary/50 flex items-center justify-center transition-all duration-300 group backdrop-blur-sm border border-white/10
                hover:scale-120 active:scale-90"
                href="#"
              >
                <InstagramIcon/>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 hover:bg-primary/50 flex items-center justify-center transition-all duration-300 group backdrop-blur-sm border border-white/10
                hover:scale-120 active:scale-90"
                href="#"
              >
                <TwitterIcon/>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 hover:bg-primary/50 flex items-center justify-center transition-all duration-300 group backdrop-blur-sm border border-white/10
                hover:scale-120 active:scale-90"
                href="#"
              >
                <FacebookIcon/>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-white/10 dark:bg-white/5 hover:bg-primary/50 flex items-center justify-center transition-all duration-300 group backdrop-blur-sm border border-white/10
                hover:scale-120 active:scale-90"
                href="#"
              >
                <YoutubeIcon/>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-linear-to-r from-transparent via-white to-transparent mt-8 mb-8"></div>
        <div className=" flex flex-col md:flex-row justify-between  items-center gap-4 text-xs text-gray-400 font-light font-display">
          <p className='text-center'>© 2025 Teatro del Bicentenario. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">
              Políticas de Privacidad
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
