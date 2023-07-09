import React from 'react'
import { ImageComponent } from '../imageComponent'
import Link from 'next/link'
import { DetailType } from '@/interface/article'

export const InnerLink = ({ data, className }: { data: any, className: string }) => {


    if (data.id != null) {

        const article: DetailType = require(`@/assets/articles/${data.id}.json`)
        return (
            <Link href={`/article/${data.id}`} className={`cursor-pointer ${className} hover:scale-[102%] 2xs::hover:scale-105 duration-700`}>
                {/* <div className="flex flex-wrap bg-neutral shadow-xl w-full gap-y-2 overflow-hidden rounded-lg">
                    <figure className='w-full lg:w-5/12 '>
                        <ImageComponent classData='h-[250px] lg:h-full w-full rounded-none' url={article.article?.image!} alt='link' />
                    </figure>
                    <div className="pb-8 pt-4 px-4 w-full flex flex-col gap-y-2 lg:w-7/12">
                        <h2 className="card-title text-xl sm:text-2xl font-bold">{article.article?.title}</h2>
                        <p className='text-sm font-thin'>{article.article?.description.slice(0, 150)}...</p>
                    </div> */}
                {/* </div> */}
            </Link>
        )
    }
}
