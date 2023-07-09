'use client'

import { useState } from 'react';
import { Input } from "@/components/ui/input"
import DeleteSVG from '@/assets/icons/delete';
import DownArrowSVG from '@/assets/icons/downArrow';
import AddSVG from '@/assets/icons/add';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { GraphType } from '@/interface/article';


export const LabelsInput = (
    {
        data,
        updateGraphData,
    }: {
        data: GraphType,
        updateGraphData: Function
    }
) => {


    const [activeLabel, setActiveLabel] = useState<boolean>(false)

    return (
        <div className={`w-full border-neutral border-2 px-2 py-1 mx-2 rounded-xl duration-500`}>
            <Collapsible
                open={activeLabel}
                onOpenChange={() => {
                }}
                className="w-full space-y-2"
            >
                <div className="flex items-center justify-between space-x-4 px-2">
                    <CollapsibleTrigger asChild>
                        <div className='flex w-full justify-between items-center py-2'>
                            <div
                                className={`cursor-pointer bg-neutral-content/80 text-neutral rounded-md  w-6 h-6 flex justify-center items-center hover:scale-110 duration-500 hover:bg-neutral-content `}
                                onClick={() => {
                                    setActiveLabel(!activeLabel)
                                }}
                            >
                                <div className={`${activeLabel ? "rotate-[-180deg]" : "rotate-0"} duration-500`}>
                                    <DownArrowSVG />
                                </div>
                            </div>
                            <p>Labels</p>
                            <div className='flex gap-x-4'>
                                <div
                                    className='text-neutral-content/80 cursor-pointer w-6 h-6 hover:scale-110 duration-500 hover:text-neutral-content'
                                    onClick={() => {
                                        let newGraphData: GraphType = {
                                            labels: [...data.labels],
                                            datasets: [...data.datasets],
                                            legendPosition: data.legendPosition
                                        }
                                        newGraphData.labels = [...data.labels, ""];
                                        newGraphData.datasets.map((dataset, index) => {
                                            newGraphData.datasets[index].data = [...dataset.data, 0]
                                            newGraphData.datasets[index].backgroundColor = [...dataset.backgroundColor, "#ffffff"]
                                        })
                                        updateGraphData({ graphData: newGraphData })
                                    }}
                                >
                                    <AddSVG />
                                </div>

                            </div>
                        </div>
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                    <div className='w-full flex flex-wrap mb-2 gap-2 px-2'>
                        {data?.labels.map((label, index) => {
                            return <div key={index} className='flex gap-x-2 items-center flex-1 min-w-[320px] '>
                                <Input
                                    className='flex-1 bg-transparent border-neutral outline-none focus:outline-none focus:border-neutral-content/90 duration-500'
                                    type="text"
                                    value={label}
                                    placeholder={`Label number ${index + 1}`}
                                    onInput={(event: any) => {
                                        let newGraphData: GraphType = {
                                            labels: [...data.labels],
                                            datasets: [...data.datasets],
                                            legendPosition: data.legendPosition
                                        }
                                        const newData = [...newGraphData.labels]
                                        newData[index] = event.target.value;
                                        newGraphData.labels = newData;
                                        updateGraphData({ graphData: newGraphData })
                                    }} />
                                {(data.labels.length > 1 || (data.labels.length === 1 && index != 0)) && <div className='hover:text-error w-8 h-8' onClick={() => {
                                    let newGraphData: GraphType = {
                                        labels: [...data.labels],
                                        datasets: [...data.datasets],
                                        legendPosition: data.legendPosition
                                    }
                                    const newData = [...newGraphData.labels]
                                    newData.splice(index, 1);
                                    newGraphData.labels = newData;
                                    newGraphData.datasets.map((dataset, secondIndex) => {
                                        const newDataset = [...dataset.data]
                                        newDataset.splice(index, 1);
                                        newGraphData.datasets[secondIndex].data = [...newDataset]
                                        const newDatasetColor = [...dataset.backgroundColor]
                                        newDatasetColor.splice(index, 1);
                                        newGraphData.datasets[secondIndex].backgroundColor = [...newDatasetColor]
                                    })
                                    updateGraphData({ graphData: newGraphData })
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
                </CollapsibleContent>
            </Collapsible>
        </div>
    )
}
