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

      <div className="absolute inset-0 z-40 curtain-spotlight"></div>

      <div
        id="curtain-left"
        className="absolute left-0 top-0 h-full w-[60%] -ml-[10%] curtain-fabric lg:animate-curtain-open-left
        animate-curtain-mobile-left"
      ></div>

      <div
        id="curtain-right"
        className="absolute right-0 top-0 h-full w-[60%] -mr-[10%] curtain-fabric lg:animate-curtain-open-right animate-curtain-mobile-right"
      ></div>
    </div>
  )
}
