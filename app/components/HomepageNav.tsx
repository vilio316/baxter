'use client'
import Link from "next/link"
import { useState } from "react"

export default function HomeNav(){
    const [state, setState] = useState(false)
    return(
        <div className="grid grid-cols-12 navbar items-center my-2">
            <p className="col-span-10 md:col-span-7 md:text-4xl text-3xl">
                <Link href={'/'} target="_blank">
                Baxter.
                </Link> 
            </p>
            <div className="col-span-5 grid-cols-6 p-2 hidden md:grid items-center">
                <Link href={'/'} className="text-center px-2 py-1 text-xl hover:text-2xl transition-all">Home</Link>
                <Link href={'/about_us'} className="text-center px-2 py-1 text-xl hover:text-2xl transition-all" >About</Link>
                <Link href={'/'} className="text-center px-2 py-1 text-xl hover:text-2xl transition-all">Services</Link>
                <Link href={'/contact_page'} className="text-center px-2 py-1 text-xl hover:text-2xl transition-all">Contact</Link>
                <Link href={'/stock'} className="grid col-span-2 p-1 rounded-2xl text-center bg-pink-700 text-2xl font-bold hover:font-bold transition-all">Test Here</Link>
            </div>

            <div className="menu_button_mob grid col-span-2 md:hidden">
                <div className="col-span-1 justify-center">
                    <span className="h-[4px] w-4/5 p-1 rounded-md bg-pink-700 my-[2px] block"></span>
                    <span className="h-[4px] w-4/5 p-1 rounded-md bg-pink-700 my-[2px] block"></span>
                    <span className="h-[4px] w-4/5 p-1 rounded-md bg-pink-700 my-[2px] block"></span>
                </div>

            </div>

        
        </div>
    )
}