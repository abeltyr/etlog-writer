'use client'

import { GraphType } from '@/interface/article';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { DatasetsInput, LabelsInput, PositionInput } from './graphData';

ChartJS.register(ArcElement, Tooltip, Legend);

export const CustomPie = (
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
                    <div className='w-full xs:w-2/3 md:w-1/2'>
                        <div
                            className={`${className}`}>
                            <div className='w-10/12 2xs:w-auto  min-h-[300px] lg:min-h-[400px]'>
                                <Pie
                                    height={450}
                                    options={{
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                position: data?.legendPosition,
                                            },
                                        },
                                        layout: {
                                            padding: {
                                                bottom: 10,
                                                left: 10,
                                                right: 10
                                            }
                                        }
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