type CardProps = {
    title : string
    background : string
}

export function Card(props : CardProps) {
    return (
        <div className={`bg-${props.background} max-w-96 px-4 py-5 border rounded-lg justify-center`}>
            <span className="text-2xl">{props.title}</span>
                    
        </div>
    )
}