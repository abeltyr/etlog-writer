'use client'

import React, { useEffect } from 'react'
import { ImageComponent } from '../imageComponent'

export const OuterLink = async ({ data, className }: { data: string, className: string }) => {


    return (
        <div className="card sm:card-side bg-neutral shadow-xl w-full">
            <figure className='w-full sm:w-1/3'>
                <ImageComponent classData='h-[150px] w-full ' url="https://etlog.s3.amazonaws.com/articles/0/main.webp" alt='link' />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">New album is released!</h2>
                <p className='font-thin'>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    )
}
