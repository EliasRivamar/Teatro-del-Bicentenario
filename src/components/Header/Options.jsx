export function Options({options}) {
  return (
    <div className='absolute top-9 bg-linear-to-t from-black via-black/90 to-black pt-5 pb-4 place-items-center place-content-center hidden rounded-xl w-50 transition-all animate-fade-in duration-300 group-hover:flex group-hover:flex-col gap-2'>
      {options.map((option, index) => (
        <p key={index}  className='relative group/option transition-colors duration-300 text-white hover:text-primary px-2 py-1 rounded-xl text-center'>{option}
          <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/option:w-full"></span>
        </p>
      ))}
    </div>
  )
}
