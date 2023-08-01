import { onPaste } from '@/utils/actions'
import React, { useEffect } from 'react'

export const TypographyList = ({
    data,
    className,
    id,
    onUpdate,
    keyInputListener
}: {
    data: string,
    className: string,
    id: string,
    keyInputListener: Function
    onUpdate: Function
}) => {

    useEffect(() => {
        const el: any = document.getElementById(id);

        if (el) {
            el.innerHTML = data
        }
    }, [])

    return (
        <div className={`${className} `}>
            <ul className="ml-6 list-disc [&>ui]:mt-2">
                <li
                    className='text-start  outline-none cursor-text'
                    id={id}
                    contentEditable
                    suppressContentEditableWarning={true}
                    onKeyDown={(event: any) => {
                        keyInputListener(event)
                    }}
                    onInput={(event: any) => {
                        onUpdate(event.target.outerText)
                    }}
                    onPaste={(event: any) => {
                        onPaste({ event, id, onUpdate })
                    }}
                    placeholder="Dot List"
                />
            </ul>
        </div>
    )
}
