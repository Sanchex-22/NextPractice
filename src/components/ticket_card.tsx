import {useEffect,useState} from 'react'

export default function TicketCard(props){
    const [data, setData] = useState({});
    useEffect(() => {
        setData(props);
      }, [props]);
      console.log(data)
    return(
        <>
            {data.prop === "grass" ?
            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "poison" ?
            <span className="inline-block bg-violet-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "fire" ?
            <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "normal" ?
            <span className="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "water" ?
            <span className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "shadow" ?
            <span className="inline-block bg-violet-950 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "ice" ?
            <span className="inline-block bg-cyan-300 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "rock" ?
            <span className="inline-block bg-yellow-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "steel" ?
            <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "psychic" ?
            <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "fairy" ?
            <span className="inline-block bg-violet-300 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

            {data.prop === "electric" ?
            <span className="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
            : null}

        </>
    )
}