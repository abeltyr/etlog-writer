'use client'

import React, { useEffect } from 'react'

export const TypographyH1 = ({
    data,
    className,
    id,
    onUpdate
}: {
    data: string,
    className: string,
    id: string,
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
            <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl break-words outline-none cursor-text`}
                id={id}
                contentEditable
                suppressContentEditableWarning={true}
                onKeyDown={(event: any) => {
                    onUpdate(event)
                }}
                placeholder={"Header 1"}
            >
            </h1>
        </div>
    )
}
