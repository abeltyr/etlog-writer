import React, { useEffect } from 'react'

export const TypographyP = ({
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

            <p className={`leading-7 [&:not(:first-child)]:mt-6 outline-none cursor-text`}
                id={id}
                contentEditable
                suppressContentEditableWarning={true}
                onKeyDown={(event: any) => {
                    onUpdate(event)
                }}
                placeholder="Text" />

        </div>
    )
}
