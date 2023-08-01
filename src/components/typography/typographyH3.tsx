import { onPaste } from '@/utils/actions'
import React, { useEffect } from 'react'

export const TypographyH3 = ({
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
        <div className={className}>
            <h2 className={`text-start  scroll-m-20 text-2xl font-semibold tracking-tight  outline-none cursor-text`}
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
                placeholder="Header 3" />
        </div>
    )
}
