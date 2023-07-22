import React, { useEffect } from 'react'

export const Blockquote = ({
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
            <blockquote className={`border-l-2 pl-6 italic outline-none cursor-text`}
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
