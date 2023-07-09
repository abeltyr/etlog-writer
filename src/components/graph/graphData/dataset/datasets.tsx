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
import { DatasetInput } from './dataset';


export const DatasetsInput = (
    {
        data,
        updateGraphData,
    }: {
        data: GraphType,
        updateGraphData: Function
    }
) => {


    const [activeDatasets, setActiveDatasets] = useState<boolean>(false)
    const [activeDataset, setActiveDataset] = useState<number>(0)

    return (
        <div className={`w-full border-neutral border-2 px-2 py-1 mx-2 rounded-xl duration-500`}>
            <Collapsible
                open={activeDatasets}
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
                                    setActiveDatasets(!activeDatasets)
                                }}
                            >
                                <div className={`${activeDatasets ? "rotate-[-180deg]" : "rotate-0"} duration-500`}>
                                    <DownArrowSVG />
                                </div>
                            </div>
                            <p>DataSets</p>
                            <div
                                className='text-neutral-content/80 cursor-pointer w-6 h-6 hover:scale-110 duration-500 hover:text-neutral-content'
                                onClick={() => {
                                    let newGraphData: GraphType = {
                                        labels: [...data.labels],
                                        datasets: [...data.datasets],
                                        legendPosition: data.legendPosition
                                    }
                                    newGraphData.datasets = [...newGraphData.datasets, {
                                        label: `Dataset Label ${newGraphData.datasets.length}`,
                                        backgroundColor: newGraphData.datasets[newGraphData.datasets.length - 1].backgroundColor,
                                        data: newGraphData.datasets[newGraphData.datasets.length - 1].data,
                                    }]
                                    updateGraphData({ graphData: newGraphData })
                                }}
                            >
                                <AddSVG />
                            </div>

                        </div>
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="px-2">

                    {data?.datasets.map((dataset, index) => {
                        return <DatasetInput
                            activeDataset={activeDataset}
                            setActiveDataset={setActiveDataset}
                            title={`DataSet Number ${index + 1}`}
                            index={index}
                            data={data}
                            dataset={dataset}
                            updateGraphData={updateGraphData} />

                    })}

                </CollapsibleContent>
            </Collapsible>

        </div>
    )
}
