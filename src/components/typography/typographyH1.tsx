'use client'

import { onPaste } from '@/utils/actions'
import React, { useEffect } from 'react'

export const TypographyH1 = ({
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
            <h1 className={`text-start scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl break-words outline-none cursor-text`}
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
                placeholder={"Header 1"}
            >
            </h1>
        </div>
    )
}
