import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { CircleHelp, Home, PanelsTopLeft, RotateCcw, Settings } from 'lucide-react'
import { Process,generatePID } from './components/Process';


function App() {
  const [processos,setProcessos] = useState<number>();
  const [cards,setCards] = useState<typeof Card[]>([]);


  return (
    <main className='font-light w-screen h-screen bg-slate-600'>
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
        <div className='flex flex-col bg-green-500 text-center items-center min-w-full min-h-fit'>
          <h1>Gerenciador</h1>
          <input type="text" onChange={(e) => setProcessos(Number(e.target.value))} className='max-w-8'/>
          <div className='flex justify-evenly'>
            <Card title='FIFO' background='white'></Card>
            <Card title='Round Robin' background='white'></Card>
            <Card title='EDF' background='white'></Card>
            <Card title='SJF' background='white'></Card>
          </div>
        </div>
        
      </body>
    </main>
  )
}

export default App
