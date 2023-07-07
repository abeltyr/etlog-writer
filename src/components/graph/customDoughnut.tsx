'use client'

import { GraphType } from '@/interface/article';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const CustomDoughnut = (
    { data, className, title, legendPosition }: {
        data: GraphType,
        className: string,
        title: string
        legendPosition: any
    }
) => {

    return (
        <Doughnut
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