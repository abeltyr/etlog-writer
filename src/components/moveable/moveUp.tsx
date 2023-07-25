import React from 'react'
import UpArrowSVG from '@/assets/icons/upArrow';

export const MoveUp = () => {

    return (
        <div className='fixed bottom-24 right-9 w-12 h-12 px-1 cursor-pointer bg-neutral-content text-base-100  flex justify-center items-center rounded-xl hover:scale-110 duration-500 '
            onClick={() => {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth' // 'auto' or 'smooth'
                });
            }}>
            <UpArrowSVG width='100%' height='100%' />
        </div>
    )
}
