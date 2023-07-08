import LogoSVG from '@/assets/icons/logo'
import YoutubeSVG from '@/assets/icons/youtube'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content flex flex-wrap gap-x-20">

            <div className="items-center grid-flow-col flex justify-center md:justify-start w-full md:w-auto flex-col md:flex-row gap-y-4">
                <div className='h-10 w-10'>
                    <LogoSVG width="100%" height='100%' />
                </div>
                <p className='text-base md:text-lg text-center'>Etlog Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
            <div className='flex-1 md flex w-full md:w-auto justify-center'>
                <Link href="/privacy" className="select-none cursor-pointer normal-case hover:scale-105 duration-500 text-sm flex gap-x-2 items-center ">
                    Privacy Policies
                </Link>
            </div>
            <div className="grid-flow-col gap-4 flex justify-around md:justify-end flex-1  md:place-self-center md:justify-self-end">
                {/* <a href="https://twitter.com" target="_blank" className='hover:text-accent duration-500 flex flex-col justify-center items-center gap-y-1'>
                    <TwitterSVG />
                    <p className='text-sm'>Twitter</p>
                </a> */}
                <a href="https://youtube.com/@etlog-research" target="_blank" className='hover:text-accent duration-500 flex flex-col justify-center items-center gap-y-1'>
                    <YoutubeSVG />
                    <p className='text-sm'>Youtube</p>
                </a>

                {/* <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a> */}
            </div>
        </footer>
    )
}
