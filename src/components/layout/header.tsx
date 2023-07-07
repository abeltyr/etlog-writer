import LogoSVG from '@/assets/icons/logo'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <div className="bg-base-100/100 text-base-content py-4 items-center flex justify-between px-4 xs:px-8 sm:px-10 z-10">
            <Link href="/" className="select-none cursor-pointer normal-case hover:scale-105 duration-500 text-xl flex gap-x-2 items-center ">
                <div className='h-12 w-12'>
                    <LogoSVG height='100%' width='100%' />
                </div>
                <p className='text-3xl font-bold'>
                    Etlog
                </p>
            </Link>
            <div className="flex-none">
                {/* <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button> */}
            </div>
        </div>
    )
}
