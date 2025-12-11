import { useEffect } from 'react'

export function CurtainLoader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 4000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-9999 pointer-events-none">

      {/* VELO NEGRO QUE SE VA ILUMINANDO */}
      <div className="absolute inset-0 bg-black/90 animate-stage-light"></div>

      {/* CONTENEDOR DE TELONES */}
      <div className="absolute inset-0 flex overflow-hidden">

        {/* Telón Izquierdo */}
        <div
          className="w-1/2 h-full bg-curtain
                     animate-curtain-left"
        />

        {/* Telón Derecho */}
        <div
          className="w-1/2 h-full bg-curtain
                     animate-curtain-right"
        />
      </div>
    </div>
  )
}
