
import Link from "next/link"
export default function Header(){
    return(
        <>
        <nav className="w-full h-[10vh] bg-[#030033] flex justify-around items-center">
    <span>Header</span>
    <ul className="flex justify-around items-center w-full h-full">
        <li className="text-white"><Link href = "/">Home</Link></li>
        <li className="text-white"><Link href = "/register">Register</Link></li>
        <li className="text-white"><Link href = "/login">Login</Link></li>
        <li className="text-white"><Link href = "/yourmoney">Exspenses</Link></li>
        <li className="text-white">Logout</li>
    </ul>
        </nav>
        </>
    )
}