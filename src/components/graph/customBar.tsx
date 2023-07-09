'use client'
import React, { useEffect, useState } from 'react'
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
import { DatasetsInput, LabelsInput, PositionInput } from './graphData';

export const CustomBar = (
    {
        data,
        className,
        checkAndResetData,
        updateGraphData
    }: {
        data: GraphType,
        className: string,
        checkAndResetData: Function,
        updateGraphData: Function
    }
) => {



    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        checkAndResetData();
        setLoading(false);
    }, [])

    if (loading) {
        return (<div className=''>
        </div>)
    }
    else
        return (
            <div className='flex flex-col gap-y-2'>
                <div className='w-full'>
                    <PositionInput data={data}
                        updateGraphData={updateGraphData}
                    />
                </div>
                <div className='w-full'>
                    <LabelsInput data={data}
                        updateGraphData={updateGraphData}
                    />
                </div>
                <div className='w-full mb-2'>
                    <DatasetsInput data={data}
                        updateGraphData={updateGraphData}
                    />
                </div>
                <div className='flex justify-center w-full relative min-w-[320px]'>
                    <div className='w-full xs:w-2/3 '>
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
                                                position: data?.legendPosition,
                                            },
                                        },
                                    }}
                                    data={{
                                        datasets: data?.datasets,
                                        labels: data?.labels
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
}