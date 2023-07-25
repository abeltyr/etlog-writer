import React from 'react'
import { useWriter } from '@/context/writer';
import DownloadSVG from '@/assets/icons/download';

export const DownloadBox = () => {

    const { download, } = useWriter();
    return (
        <div className='fixed bottom-9 left-9 w-14 h-14 px-3 cursor-pointer bg-neutral-content text-base-100  flex justify-center items-center rounded-xl hover:scale-110 duration-500 '
            onClick={() => {
                download({ title: "articlesDetail" });
            }}>
            <DownloadSVG width='100%' height='100%' />
        </div>
    )
}
