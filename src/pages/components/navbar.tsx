
export default function Navbar(){
    return (
    <nav className="flex justify-between w-full h-16 text-white p-5 border-b border-violet-800 fixed z-0 bg-black bg-opacity-90">
        <ul>
            <li>NextJS</li>
        </ul>

        <ul className="flex">
            <li className="mr-5">Hola</li>
            <li className="mr-5">Mundo</li>
        </ul>

    </nav>
    )
}