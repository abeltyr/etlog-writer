'use client'
import { Input } from "@/components/ui/input"
import DeleteSVG from '@/assets/icons/delete';
import DownArrowSVG from '@/assets/icons/downArrow';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { GraphDatasetType, GraphType } from '@/interface/article';


export const DatasetInput = (
    {
        activeDataset,
        index,
        title,
        data,
        dataset,
        updateGraphData,
        setActiveDataset
    }: {
        activeDataset: number,
        index: number
        title: string,
        data: GraphType,
        dataset: GraphDatasetType,
        updateGraphData: Function
        setActiveDataset: Function
    }
) => {



    return (
        <div className={`w-full mb-4  border-base-300 border-2 px-2 py-1 rounded-xl duration-500`}>
            <Collapsible
                open={activeDataset === index}
                onOpenChange={() => {
                }}
                className="w-full space-y-2"
            >
                <div className="flex items-center justify-between space-x-4 px-2">
                    <CollapsibleTrigger asChild>
                        <div className='flex w-full justify-between items-center pt-2 pb-1 gap-x-4'>

                            <div className='flex gap-x-2 items-center flex-1'>
                                <div
                                    className={`cursor-pointer bg-neutral-content/80 text-neutral rounded-md  w-6 h-6 flex justify-center items-center hover:scale-110 duration-500 hover:bg-neutral-content `}
                                    onClick={() => {
                                        let newIndex = index
                                        if (index === activeDataset) newIndex = -1
                                        setActiveDataset(newIndex)
                                    }}
                                >
                                    <div className={`${index === activeDataset ? "rotate-[-180deg]" : "rotate-0"} duration-500`}>
                                        <DownArrowSVG />
                                    </div>
                                </div>
                                <Input
                                    className='flex-1 bg-transparent border-neutral outline-none focus:outline-none focus:border-neutral-content/90 duration-500'
                                    type="text"
                                    value={dataset.label}
                                    placeholder={`${data.labels[index]} value`}
                                    onInput={(event: any) => {
                                        let newGraphData: GraphType = {
                                            labels: [...data.labels],
                                            datasets: [...data.datasets],
                                            legendPosition: data.legendPosition
                                        }
                                        const label = event.target.value;
                                        newGraphData.datasets[index].label = label;
                                        updateGraphData({ graphData: newGraphData })
                                    }}
                                />
                            </div>

                            {(data.datasets.length > 1 || (data.datasets.length === 1 && index != 0)) && <div className='hover:text-error w-6 h-6' onClick={() => {
                                let newGraphData: GraphType = {
                                    labels: [...data.labels],
                                    datasets: [...data.datasets],
                                    legendPosition: data.legendPosition
                                }
                                const newDatasets = [...newGraphData.datasets]
                                newDatasets.splice(index, 1);
                                newGraphData.datasets = newDatasets;
                                updateGraphData({ graphData: newGraphData })
                            }}>
                                <div className='h-full flex justify-center items-center cursor-pointer'>
                                    <div className='w-6 h-6'>
                                        <DeleteSVG width="100%" height='100%' />
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                    <div className='w-full flex flex-wrap mb-2 gap-2 px-2 gap-x-2'>

                        <div className='flex flex-col gap-y-2  '>

                            {dataset.backgroundColor.map((colorData, secondIndex) => {
                                return (
                                    <div key={secondIndex} className='flex items-center h-full overflow-hidden border-0 gap-x-2'>
                                        <div className='w-6 h-full flex items-center '>
                                            <Input
                                                className='w-full h-[70%]  duration-500 p-0 m-0 cursor-pointer border-transparent outline-0 bg-transparent rounded-full overflow-hidden border-0'
                                                type="color"
                                                value={colorData}
                                                onInput={(event: any) => {
                                                    let newGraphData: GraphType = {
                                                        labels: [...data.labels],
                                                        datasets: [...data.datasets],
                                                        legendPosition: data.legendPosition
                                                    }
                                                    const newColorSet = [...newGraphData.datasets[index].backgroundColor]
                                                    newColorSet[secondIndex] = (event.target.value);
                                                    newGraphData.datasets[index].backgroundColor = newColorSet;
                                                    updateGraphData({ graphData: newGraphData })
                                                }}
                                            />
                                        </div>
                                        <Input
                                            className='flex-1 w-full bg-transparent border-neutral outline-none focus:outline-none focus:border-neutral-content/90 duration-500'
                                            type="text"
                                            placeholder={`${data.labels[index]} color`}
                                            value={colorData}
                                            onInput={(event: any) => {
                                                let newGraphData: GraphType = {
                                                    labels: [...data.labels],
                                                    datasets: [...data.datasets],
                                                    legendPosition: data.legendPosition
                                                }
                                                const newColorSet = [...newGraphData.datasets[index].backgroundColor]
                                                newColorSet[secondIndex] = (event.target.value);
                                                newGraphData.datasets[index].backgroundColor = newColorSet;
                                                updateGraphData({ graphData: newGraphData })
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div className='flex gap-y-2 items-center flex-1 min-w-[320px] flex-wrap'>
                            {dataset.data.map((datasetData, secondIndex) => {
                                return (
                                    <div key={secondIndex} className='flex gap-x-2 items-center flex-1 min-w-full '>
                                        <Input
                                            className='flex-1 w-full bg-transparent border-neutral outline-none focus:outline-none focus:border-neutral-content/90 duration-500'
                                            type="number"
                                            value={datasetData}
                                            placeholder={`${data.labels[index]} value`}
                                            onInput={(event: any) => {
                                                let newGraphData: GraphType = {
                                                    labels: [...data.labels],
                                                    datasets: [...data.datasets],
                                                    legendPosition: data.legendPosition
                                                }
                                                const newDataSet = [...newGraphData.datasets[index].data]
                                                newDataSet[secondIndex] = parseFloat(event.target.value);
                                                newGraphData.datasets[index].data = newDataSet;
                                                updateGraphData({ graphData: newGraphData })
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </CollapsibleContent>
            </Collapsible>

        </div>
    )
}
