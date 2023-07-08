import React, { useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import IndicatorSVG from '@/assets/icons/indicator';
import { useWriter } from '@/context/writer';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from '../ui/button';
import SortSVG from '@/assets/icons/sort';
import DraggableSVG from '@/assets/icons/draggable';

export const MenuList = ({ index }: { index: number }) => {

    const [openCollapseAble, setOpenCollapseAble] = useState(0)
    const { download, updateArticle, articleDetail } = useWriter();
    return (
        <div>

            <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <div className='cursor-pointer text-neutral-content/50 hover:text-neutral-content duration-500'>
                        <IndicatorSVG />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="
              max-h-[400px] overflow-y-auto overflow-x-hidden
                w-80 bg-base-100 border-neutral ml-3 xs:ml-8 sm:ml-10 md:ml-24 lg:ml-48 xl:ml-64 p-0" >
                    <DropdownMenuLabel className='fixed z-10 bg-base-100 my-0 mx-[0.15px] w-[310px] py-2 border-b-2 border-neutral rounded-t-sm'>
                        Building blocks
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={articleDetail[index].type} onValueChange={(value) => {
                        let data = [...articleDetail]
                        data[index].type = value;
                        updateArticle(data);
                    }}>
                        <Collapsible
                            open={openCollapseAble === 0}
                            onOpenChange={() => {
                                let value = 0;
                                if (openCollapseAble === 0) { value = -1 }
                                setOpenCollapseAble(value)
                            }}
                            className="w-full space-y-2"
                        >
                            <div className="flex items-center justify-between space-x-4 px-2">
                                <CollapsibleTrigger asChild>
                                    <div className={`rounded-lg cursor-pointer flex justify-between hover:bg-neutral items-center w-full p-2 duration-500 my-1 mt-10 ${openCollapseAble === 0 ? "bg-neutral" : "bg-base-200"}`}>
                                        Typography
                                        <div className='h-4'>
                                            <SortSVG height='100%' width='100%' />
                                        </div>
                                    </div>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <DropdownMenuRadioItem
                                    value="H1T">
                                    Header 1
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="H2T">
                                    Header 2
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="H3T">
                                    Header 3
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="P">
                                    Text
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="List">
                                    List
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="BQ">
                                    Blockquote
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="InLineCode">
                                    InLineCode
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="Lead">
                                    Lead
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="Large">
                                    Large
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="Small">
                                    Small
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem
                                    value="Muted">
                                    Muted
                                </DropdownMenuRadioItem>
                            </CollapsibleContent>
                        </Collapsible>
                        <Collapsible
                            open={openCollapseAble === 1}
                            onOpenChange={() => {
                                let value = 1;
                                if (openCollapseAble === 1) { value = -1 }
                                setOpenCollapseAble(value)
                            }}
                            className="w-full space-y-2"
                        >
                            <div className="flex items-center justify-between space-x-4 px-2">
                                <CollapsibleTrigger asChild>
                                    <div className={`rounded-lg cursor-pointer flex justify-between hover:bg-neutral items-center w-full p-2 duration-500 my-1 ${openCollapseAble === 1 ? "bg-neutral" : "bg-base-200"}`}>
                                        Graph
                                        <div className='h-4'>
                                            <SortSVG height='100%' width='100%' />
                                        </div>
                                    </div>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <DropdownMenuRadioItem value="Table">Table</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Bar">Bar</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Pie">Pie</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Doughnut">Doughnut</DropdownMenuRadioItem>
                            </CollapsibleContent>
                        </Collapsible>

                        <Collapsible
                            open={openCollapseAble === 2}
                            onOpenChange={() => {
                                let value = 2;
                                if (openCollapseAble === 2) { value = -1 }
                                setOpenCollapseAble(value)
                            }}
                            className="w-full space-y-2"
                        >
                            <div className="flex items-center justify-between space-x-4 px-2">
                                <CollapsibleTrigger asChild>
                                    <div className={`rounded-lg cursor-pointer flex justify-between hover:bg-neutral items-center w-full p-2 duration-500 my-1 ${openCollapseAble === 2 ? "bg-neutral" : "bg-base-200"}`}>
                                        Links
                                        <div className='h-4'>
                                            <SortSVG height='100%' width='100%' />
                                        </div>
                                    </div>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <DropdownMenuRadioItem value="InnerLink">Article Id</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="OuterLink">Url</DropdownMenuRadioItem>
                            </CollapsibleContent>
                        </Collapsible>

                        <Collapsible
                            open={openCollapseAble === 3}
                            onOpenChange={() => {
                                let value = 3;
                                if (openCollapseAble === 3) { value = -1 }
                                setOpenCollapseAble(value)
                            }}
                            className="w-full space-y-2"
                        >
                            <div className="flex items-center justify-between space-x-4 px-2">
                                <CollapsibleTrigger asChild>
                                    <div className={`rounded-lg cursor-pointer flex justify-between hover:bg-neutral items-center w-full p-2 duration-500 my-1 ${openCollapseAble === 3 ? "bg-neutral" : "bg-base-200"}`}>
                                        Media
                                        <div className='h-4'>
                                            <SortSVG height='100%' width='100%' />
                                        </div>
                                    </div>
                                </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent className="space-y-2">
                                <DropdownMenuRadioItem className="hover:bg-neutral active:bg-neutral" value="Image">Upload Image</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Image">Image Link</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Image">Video</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Image">Video Link</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="Image">Youtube Video</DropdownMenuRadioItem>
                            </CollapsibleContent>
                        </Collapsible>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <div className='text-neutral-content/50 hover:text-neutral-content active:text-neutral-content duration-500 my-2'>
                <DraggableSVG />
            </div>
        </div>
    )
}
