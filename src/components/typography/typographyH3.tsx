import React, { useEffect } from 'react'

export const TypographyH3 = ({
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
            <h2 className={`scroll-m-20 text-2xl font-semibold tracking-tight  outline-none cursor-text`}
                id={id}
                contentEditable
                suppressContentEditableWarning={true}
                onKeyDown={(event: any) => {
                    onUpdate(event)
                }}
                placeholder="Header 2" />
        </div>
    )
}
