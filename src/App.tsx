import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card } from './components/Card'
import { CircleHelp, Cpu, Home, PanelsTopLeft, RotateCcw, Settings } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-screen h-screen bg-slate-600'>
      <header className='flex flex-row h-20 bg-white gap-8 justify-between items-center'>
        <div className='flex flex-row gap-2 ml-4'>
          <a href="#"><Home className='size-[36px]'/></a>  
          <a href="#"><RotateCcw className='size-[36px]'/></a>
        </div>
        
        <span className='text-4xl'>Escalonador de processos</span>
        <nav className='flex flex-row mx-9 gap-2'>
          <a href="#"><PanelsTopLeft className='size-[36px]'/></a>
          <a href="#"><CircleHelp className='size-[36px]'/></a>
          <a href="#"><Settings className='size-[36px]'/></a>
        </nav>  
      </header>
      <body className='flex w-full mt-10 justify-center'>
        <Card></Card>
      </body>
    </main>
  )
}

export default App
