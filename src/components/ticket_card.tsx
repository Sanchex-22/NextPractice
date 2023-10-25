import {useEffect,useState} from 'react'

type Type ={
    type:{
        name: string
    }
}

type Data = {
    type: string
}

export default function TicketCard({type}: {type:string}){
    const [data, setData] = useState({
        type: ""
    });
    useEffect(() => {
        setData({type});
      }, [type]);
      
    return(
        <>
            {data.type === "grass" ?
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "poison" ?
            <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "fire" ?
            <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "normal" ?
            <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "water" ?
            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "shadow" ?
            <span className="inline-block bg-violet-950 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "ice" ?
            <span className="inline-block bg-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "rock" ?
            <span className="inline-block bg-yellow-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "steel" ?
            <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "psychic" ?
            <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "fairy" ?
            <span className="inline-block bg-violet-300 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

            {data.type === "electric" ?
            <span className="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.type}
            </span>
            : null}

        </>
    )
}