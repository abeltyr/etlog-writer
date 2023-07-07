import React, { useEffect } from 'react'

export const TypographyLarge = ({
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
            <div className={`text-lg font-semibold outline-none cursor-text`}
                id={id}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={(event: any) => {
                    onUpdate(event)
                }}
                placeholder="Large" />
        </div>
    )
}
