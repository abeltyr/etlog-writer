import React from 'react'
import Image from 'next/image'

export const ImageComponent = ({ url, alt, classData }: { url: string, alt: string, classData: string }) => {
    return (
        <div className={`${classData != null && classData.length > 0 ? classData : "max-h-[300px] md:max-h-[700px] h-[80vh] w-full  mx-auto"} flex justify-center items-center relative overflow-hidden rounded-xl`}>
            <Image
                loading='lazy'
                placeholder="blur"
                unoptimized={false}
                blurDataURL={url}
                priority={false}
                alt={alt}
                fill
                className={`object-cover`}
                src={url!}
            />
        </div>
    )
}
