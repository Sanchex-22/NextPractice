
import Link from "next/link"
export default function Navbar(){
    return (
      <nav className="flex justify-between w-full h-16 text-white p-5 border-b border-violet-800 fixed z-0 bg-hinted-grey-3 bg-opacity-90">
        <ul>
          <li className="font-bold">NextJS</li>
        </ul>

        <ul className="flex">
          <li className="mr-5 font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="mr-5 font-bold">
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    )
}