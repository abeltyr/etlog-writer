import React, { useEffect } from 'react'

export const TypographyLead = ({
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
            <p className={` text-xl text-muted-foreground outline-none cursor-text`}
                id={id}
                contentEditable
                suppressContentEditableWarning={true}
                onKeyDown={(event: any) => {
                    keyInputListener(event)
                }}
                onInput={(event: any) => {
                    onUpdate(event.target.outerText)
                }}
                placeholder="Lead" />
        </div>
    )
}
