import React, { useEffect } from 'react'

export const TypographyH2 = ({
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
            <h2 className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 outline-none cursor-text`}
                id={id}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={(event: any) => {
                    onUpdate(event)
                }}
                placeholder="Header 2"
            />
        </div>
    )
}
