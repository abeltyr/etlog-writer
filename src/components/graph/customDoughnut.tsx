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
        <div className='flex justify-center w-full relative '>
            <div className='w-full xs:w-2/3 md:w-1/2'>
                <div
                    className={`${className}`}>
                    <div className='w-10/12 2xs:w-auto  min-h-[300px] lg:min-h-[400px]'>
                        <Doughnut
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
                    </div>
                </div>

            </div>
        </div>

    )
}