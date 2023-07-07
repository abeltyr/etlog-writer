import React from 'react'

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

export const MenuList = ({ index }: { index: number }) => {

    const { download, updateArticle, articleDetail } = useWriter();
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <div className=' cursor-pointer'>

                    <IndicatorSVG />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-base-100" >
                <DropdownMenuLabel>Types</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={articleDetail[index].type} onValueChange={(value) => {
                    let data = [...articleDetail]
                    data[index].type = value;
                    updateArticle(data);
                }}>
                    <DropdownMenuRadioItem value="H1T" className=''>Header 1</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="H2T">Header 2</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="H3T">Header 3</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="P">Text</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="List">List</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="BQ">Blockquote</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="InLineCode">InLineCode</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Lead">Lead</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Large">Large</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Small">Small</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Muted">Muted</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Table">Table</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Image">Image</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Bar">Bar</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Pie">Pie</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Doughnut">Doughnut</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="InnerLink">InnerLink</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
