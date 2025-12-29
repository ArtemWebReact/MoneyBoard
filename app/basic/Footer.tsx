import Link from "next/link";
import { cyberFont3 } from "../fonts/fonts";
export default function Footer() {
  return (
    <footer className="bg-black text-[cyan] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Лого / Назва */}
        <div className="text-lg font-bold">
          MB‑CashMatrix
        </div>

        {/* Навігація */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm">
         <Link href = "/"  className={`hover:text-white transition ${cyberFont3.className} `} >Home</Link>
                    <Link href = "/register"  className={`hover:text-white transition ${cyberFont3.className} `}>Register</Link>
               <Link href = "/login"  className={`hover:text-white transition ${cyberFont3.className} `}>Login</Link>
               <Link href = "/yourmoney"  className={`hover:text-white transition ${cyberFont3.className} `}>Your Money</Link>
               <Link href = "/graphics"  className={`hover:text-white transition ${cyberFont3.className} `}>Graphics</Link>
        </nav>

        {/* Соцмережі */}
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" className="hover:text-white transition">Twitter</a>
          <a href="https://github.com" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-white transition">LinkedIn</a>
        </div>
      </div>

      {/* Лінія + копірайт */}
      <div className="border-t border-[cyan]/30 mt-6 pt-4 text-center text-xs cyan/70">
        © {new Date().getFullYear()} MB‑CashMatrix. All rights reserved.
      </div>
    </footer>
  );
}
