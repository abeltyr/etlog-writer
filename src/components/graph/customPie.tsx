'use client'

import { GraphType } from '@/interface/article';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const CustomPie = (
    { data, className, title, legendPosition }: {
        data: GraphType,
        className: string,
        title: string
        legendPosition: any
    }
) => {

    return (
        <Pie
            className={`${className}`}
            options={{
                responsive: true,
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

    )
}