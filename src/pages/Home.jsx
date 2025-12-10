import { Footer } from '../components/Footer'
import { Header } from '../components/Header/Header'

function App() {
  return (
    <main className="min-h-screen">
      <img
        src="/teatro-home.jpg"
        alt="Teatro Home"
        className="flex w-full opacity-80 h-full inset-0 absolute z-0"
      />
      <Header />
      <div className="relative flex flex-col z-20">
        <div className="mt-30 flex flex-col place-content-center place-items-center">
          <h1 className="text-5xl text-white font-extrabold">
            BIENVENIDOS AL TEATRO DEL BICENTENARIO
          </h1>
          <h2 className="text-xl">SAN JUAN - ARGENTINA</h2>
        </div>
        <div className='flex place-content-center place-items-center mt-40'>
          <button>Novedades</button>
        </div>
      </div>
      
    </main>
  )
}

export default App
