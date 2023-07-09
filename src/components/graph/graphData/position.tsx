'use client'
import AddSVG from '@/assets/icons/add';
import SortSVG from '@/assets/icons/sort';
import { GraphType } from '@/interface/article';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const PositionInput = (
    {
        data,
        updateGraphData,
    }: {
        data: GraphType,
        updateGraphData: Function
    }
) => {



    return (
        <div className={`w-full border-neutral border-2 px-2 py-2 mx-2 rounded-xl duration-500`}>
            <div className="flex items-center justify-between space-x-4 px-2 ">
                <p>Graph Data</p>

                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <div
                            className='text-neutral-content/80 cursor-pointer flex justify-center items-center bg-neutral px-2 py-1 gap-x-1 rounded-lg hover:scale-105 duration-500 hover:text-neutral-content'
                            onClick={() => {

                            }}
                        >
                            <div className='w-[14px] h-[14px]'>
                                <SortSVG width='100%' height='100%' />
                            </div>
                            Position
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="
              max-h-[400px] overflow-y-auto overflow-x-hidden
                w-80 bg-base-100 border-neutral p-0" >
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={data.legendPosition} onValueChange={(value) => {

                            let newGraphData: GraphType = {
                                labels: [...data.labels],
                                datasets: [...data.datasets],
                                legendPosition: data.legendPosition
                            }
                            newGraphData.legendPosition = value;
                            updateGraphData({ graphData: newGraphData })
                        }}>
                            <DropdownMenuRadioItem
                                value="bottom">
                                Bottom
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="top">
                                Top
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="left">
                                Left
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem
                                value="right">
                                Right
                            </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}
