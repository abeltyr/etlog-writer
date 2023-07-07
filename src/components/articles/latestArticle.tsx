import React from 'react'
import { HorizontalCard } from '../card'
import { DataType } from '@/interface/article'
import { AdsComponent } from '../advertisement'

export const LatestArticle = ({ articles, title }: { articles: DataType[], title: string }) => {
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-4xl border-b-2 pb-3'>
                {title}
            </p>

            {articles.length > 0 && <div className='w-full'>
                {articles[0].article != null ? <HorizontalCard
                    article={articles[0].article!}
                    top={true}
                /> : <AdsComponent />}
            </div>
            }

            <div className=' flex flex-wrap '>

                {articles.slice(1, articles.length).map((data, index) => {
                    if (data.article != null) {
                        return <div className='w-full md:w-1/2  p-2' key={index}>
                            <HorizontalCard
                                article={data.article!}
                            />
                        </div>
                    } else
                        return <div className='w-full md:w-1/2 p-2 grid overflow-hidden' key={index}>
                            <div className=' bg-neutral grid rounded-lg items-center ' >
                                <AdsComponent />
                            </div>
                        </div>
                })}
            </div>
        </div>
    )
}
