export function Articles({
  image,
  category,
  title,
  description,
  day,
  month,
  location,
}) {
  return (
    <article className="group relative flex flex-col h-[400px] bg-[rgb(7,7,7)] border border-white/5 hover:border-primary/40 transition-all duration-700 rounded-xl overflow-hidden">
      <div className="relative w-full overflow-hidden">
        <img
          alt="Ballet"
          className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale-10 group-hover:grayscale-0"
          src={image}
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0f0f0f] via-transparent to-transparent opacity-90"></div>
        <div className="absolute top-4 right-4 flex flex-col items-center justify-center w-14 h-16 bg-black/80 backdrop-blur-md border border-primary/30 text-primary shadow-lg group-hover:border-primary/80 transition-colors duration-300">
          <span className="text-lg font-display font-bold leading-none mt-1">
            {day}
          </span>
          <div className="w-4 h-px bg-primary/40 my-0.5"></div>
          <span className="text-[0.6rem] uppercase tracking-wider font-bold">
            {month}
          </span>
        </div>
      </div>
      <div className="flex flex-col h-[55%] p-6 pt-2 relative">
        <span className="absolute -top-3 left-6 text-primary text-[0.65rem] tracking-[0.25em] uppercase font-bold bg-[#0f0f0f] px-2 py-1 border border-primary/20">
          {category}
        </span>
        <h3 className="font-display text-2xl text-white mb-3 mt-4 leading-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3 grow">
          {description}
        </p>
        <div className="opacity-0 group-hover:translate-y-0 flex group-hover:opacity-100 absolute translate-y-3 left-0 bottom-0 rounded-b h-30 justify-between items-end bg-linear-to-b from-transparent w-full via-[#080808ff] to-black p-3 transition-all duration-600">
          <a
            className="inline-flex items-center gap-2 text-gray-500 text-[0.85rem] uppercase tracking-[0.2em] group/btn hover:text-primary transition-colors"
            href="#"
          >
            Info
            {/* <span className='material-symbols-outlined text-base transition-transform group-hover/btn:translate-x-1'>
                  arrow_right_alt
                </span> */}
          </a>
          <a
            className="inline-flex items-center gap-2 text-gray-500 text-[0.85rem] uppercase tracking-[0.2em] group/btn hover:text-primary transition-colors"
            href="#"
          >
            Entradas
            {/* <span className='material-symbols-outlined text-base transition-transform group-hover/btn:translate-x-1'>
                  arrow_right_alt
                </span> */}
          </a>
        </div>
      </div>
    </article>
  )
}
