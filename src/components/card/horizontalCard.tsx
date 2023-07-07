

import React from 'react'
import { IntroArticleType } from '@/interface/article'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"

export const HorizontalCard = (
    {
        article: { id,
            title,
            description,
            labels,
            image, },
        top = false
    }: { article: IntroArticleType, top?: boolean }
) => {
    return (
        <div className="rounded-xl overflow-hidden
            w-full h-full min-h-[280px] lg:min-h-[200px]
            grid grid-cols-12 grid-rows-6 xl:grid-rows-none  
            mx-auto bg-neutral text-neutral-content">

            <div className={`flex flex-col p-3 sm:p-6 col-span-full xl:row-span-full
            row-start-4  row-end-7
            ${top ? "xl:col-span-8" : "xl:col-span-7"}
            ${top ? "xl:p-10" : "xl:p-6"}
            `}>
                <h1 className={`text-xl xs:text-2xl ${top ? "sm:text-3xl" : "sm:text2xl"} font-bold`}>

                    <Link rel="noopener noreferrer" href={`/article/${id}`} className="cursor-pointer select-none">
                        {title}
                    </Link></h1>
                <p className={`text-xs ${top ? "sm:text-base" : "sm:text-xs"} flex-1 pt-2`}>
                    <Link rel="noopener noreferrer" href={`/article/${id}`} className="cursor-pointer select-none">
                        {description.slice(0, 150)}...
                    </Link>
                </p>
                <div className="flex items-center justify-between flex-wrap mt-4 gap-y-4">
                    <div className='flex flex-1 gap-2 overflow-hidden'>
                        {labels.map((data, index) => {
                            return (
                                <Badge variant="secondary" className='rounded-sm uppercase bg-base-100 text-base-content hover:bg-base-200 select-none' key={index}>#{data}</Badge>
                            )
                        })}
                    </div>
                </div>
            </div>

            <Link rel="noopener noreferrer " href={`/article/${id}`} className={`bg-base-100 group col-span-full 
            row-start-1 row-end-4
            ${top ? "xl:col-span-4" : "xl:col-span-5"}  relative overflow-hidden`}>
                <Image
                    loading='lazy'
                    placeholder="blur"
                    unoptimized={false}
                    blurDataURL={image}
                    priority={false}
                    src={image}
                    alt={`article-${title}`}
                    fill
                    className={`object-cover group-hover:scale-125 transition duration-1000 ease-in-out`} />
                <div className='w-full h-full absolute z-10 bg-neutral-focus/30 group-hover:bg-neutral-focus/0 duration-500' />
            </Link>
        </div >

    )
}


