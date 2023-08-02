import { onPaste } from '@/utils/actions'
import React, { useEffect } from 'react'

export const TypographySmall = ({
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
            <small className={`text-start text-sm font-medium leading-none outline-none cursor-text`}
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
                placeholder="Small Text" />
        </div>
    )
}
