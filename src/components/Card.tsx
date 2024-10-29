type CardProps = {
    title : string,
    
}

export function Card(props : CardProps) {
    return (
        <div className="bg-white max-w-96 px-4 py-5 border rounded-lg">
            <div className='mr-8 flex flex-row items-center justify-end gap-2'>
                <span className='text-4xl'>Teste</span>
            </div>
            <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam harum voluptatem ipsa sequi totam, consequatur distinctio amet voluptatibus, quos illum unde, quaerat quis atque similique. Corrupti eum a nemo in.</p>        
        </div>
    )
}