import {useEffect,useState} from 'react'

export default function TicketCard(props){
    const [data, setData] = useState({});
    useEffect(() => {
        setData(props);
      }, [props]);
      console.log(data)
    return(
        <>

            <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #{data.prop}
            </span>
        </>
    )
}