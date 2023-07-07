import React, { useEffect } from 'react'

export const TypographyList = ({
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
        <div className={`${className} `}>
            <ul className="ml-6 list-disc [&>ui]:mt-2">
                <li
                    className=' outline-none cursor-text'
                    id={id}
                    contentEditable
                    suppressContentEditableWarning={true}
                    onInput={(event: any) => {
                        onUpdate(event)
                    }}
                    placeholder="Dot List"
                />
            </ul>
        </div>
    )
}
