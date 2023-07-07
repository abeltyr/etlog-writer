import React, { useEffect } from 'react'

export const TypographyMuted = ({
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
            <p className={`text-sm text-muted-foreground outline-none cursor-text`}
                id={id}
                contentEditable
                suppressContentEditableWarning={true}
                onInput={(event: any) => {
                    onUpdate(event)
                }}
                placeholder="Muted Text" />

        </div>
    )
}
