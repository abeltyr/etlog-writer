import React, { useEffect } from 'react'

export const TypographyInlineCode = ({
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
            <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold outline-none cursor-text`}
                id={id}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={(event: any) => {
                    onUpdate(event)
                }}
                placeholder="inLine code" />
        </div>
    )
}
