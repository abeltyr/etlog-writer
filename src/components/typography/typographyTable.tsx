import { TableType } from '@/interface/article'
import React from 'react'

export const TypographyTable = ({ table, className, }: { className: string, table: TableType }) => {

    if (table.tableThread && table.tableBody)
        return (
            <div className={`${className} w-full flex overflow-x-auto`}>
                <div className={`my-6 flex justify-center min-w-[620px]`}>
                    <table >
                        <thead>
                            <tr className="m-0 border-t p-0 even:bg-muted">
                                {table.tableThread.map((data, index) => {
                                    return (
                                        <th key={index} className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                            {data}
                                        </th>
                                    )
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {table.tableBody.map((data, index) => {
                                return (<tr className="m-0 border-t p-0 even:bg-muted">
                                    {data.map((value, index) => {
                                        return (<td key={index} className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            {value}
                                        </td>)
                                    })}
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
}
