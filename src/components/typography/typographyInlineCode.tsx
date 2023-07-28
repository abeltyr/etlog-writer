import React, { useEffect } from 'react'

export const TypographyInlineCode = ({
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
        <div className={`bg-neutral p-4 rounded-md  ${className}`}>
            <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold outline-none cursor-text w-full`}
                id={id}
                contentEditable
                suppressContentEditableWarning={true}
                onKeyDown={(event: any) => {
                    keyInputListener(event)
                }}
                onInput={(event: any) => {
                    onUpdate(event.target.outerText)
                }}
                placeholder="Inline code" />
        </div>
    )
}
