import { DropDown } from './DropDown'

export function Header () {
  return (
    <header className='h-20 flex gap-5 sticky top-0 bg-black/5 backdrop-blur-md place-items-center place-content-center z-90'>
      <button className='cursor-pointer absolute left-5'>
        <img src='/logoteatro.png' alt='Logo Teatro del Bicententenario'/>
      </button>
      <div className='flex'>
        <DropDown title={'Teatro'}/>
        <DropDown title={'Comprar Entradas'}/>
        <DropDown title={'Visitas Guiadas'}/>
        <DropDown title={'Formá Parte'}/>
        <DropDown title={'Auditórium 2025'}/>
        <DropDown title={'Programación'}/>
      </div>
    </header>
  )
}