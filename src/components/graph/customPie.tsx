'use client'

import { GraphType } from '@/interface/article';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import DeleteSVG from '@/assets/icons/delete';

ChartJS.register(ArcElement, Tooltip, Legend);

export const CustomPie = (
    { data, className, title, legendPosition }: {
        data: GraphType,
        className: string,
        title: string
        legendPosition: any
    }
) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => console.log(data);

    const [labels, setLabels] = useState<string[]>([""])


    return (
        <div className='flex flex-col'>
            <div className='w-full'>
                <div className='flex w-full justify-between items-center bg-neutral px-2 py-2 rounded-lg mb-4'>
                    <p>Labels</p>
                    <div className='' onClick={() => {
                        setLabels([...labels, ""])
                    }}>
                        +
                    </div>
                </div>
                <div className='w-full flex flex-wrap mb-10 gap-2'>

                    {labels.map((data, index) => {
                        return <div key={index} className='flex gap-x-2 items-center flex-1 min-w-[320px] '>
                            <Input
                                className='flex-1 bg-transparent border-neutral outline-none focus:outline-none focus:border-neutral-content/90 duration-500'
                                type="text"
                                value={data}
                                placeholder={`Label number ${index + 1}`} onInput={(event: any) => {
                                    const newData = [...labels]
                                    newData[index] = event.target.outputText;
                                    setLabels(newData);
                                }} />
                            {(labels.length > 1 || (labels.length === 1 && index != 0)) && <div className='hover:text-error w-8 h-8' onClick={() => {
                                const newData = [...labels]
                                newData.splice(index, 1);
                                setLabels(newData);
                            }}>
                                <div className='h-full flex justify-center items-center cursor-pointer'>
                                    <div className='w-6 h-6'>
                                        <DeleteSVG width="100%" height='100%' />

                                    </div>
                                </div>
                            </div>}
                        </div>
                    })}
                </div>
            </div>
            <div className='flex justify-center w-full relative min-w-[320px]'>
                <div className='w-full xs:w-2/3 md:w-1/2'>
                    <div
                        className={`${className}`}>
                        <div className='w-10/12 2xs:w-auto  min-h-[300px] lg:min-h-[400px]'>
                            <Pie
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
        </div>

    )
}