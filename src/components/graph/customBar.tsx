'use client'
import React from 'react'
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement
} from "chart.js"
ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement
)
import { Bar } from 'react-chartjs-2';
import { GraphType } from '@/interface/article';

export const CustomBar = (
    { data, className, title, legendPosition }: {
        data: GraphType,
        className: string,
        title: string
        legendPosition: any
    }
) => {

    return (
        <div
            className={`${className}`}>
            <div className='w-10/12 2xs:w-auto  min-h-[300px] lg:min-h-[400px]'>
                <Bar
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        aspectRatio: 1,
                        plugins: {
                            legend: {
                                position: legendPosition,
                            },
                            title: {
                                display: true,
                                text: title,
                            },
                        },
                    }}
                    data={data}
                />
            </div>
        </div>

    )
}