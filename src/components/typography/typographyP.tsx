import { onPaste } from '@/utils/actions'
import React, { useEffect } from 'react'

export const TypographyP = ({
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

            <p className={`text-start leading-7 [&:not(:first-child)]:mt-6 outline-none cursor-text`}
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
                placeholder="Text"
            />

        </div>
    )
}
