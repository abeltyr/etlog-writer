import React from 'react'
import UpArrowSVG from '@/assets/icons/upArrow';

export const MoveDown = () => {

    return (
        <div className='fixed bottom-9 rotate-180 right-9 w-12 h-12 px-1 cursor-pointer bg-neutral-content text-base-100  flex justify-center items-center rounded-xl hover:scale-110 duration-500 '
            onClick={() => {
                window.scroll({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: 'smooth' // 'auto' or 'smooth'
                });
            }}>
            <UpArrowSVG width='100%' height='100%' />
        </div>
    )
}
