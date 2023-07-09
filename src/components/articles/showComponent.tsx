import React from 'react'
import { DetailType, GraphType } from '@/interface/article'
import { Blockquote, TypographyH1, TypographyH2, TypographyH3, TypographyInlineCode, TypographyLarge, TypographyLead, TypographyList, TypographyMuted, TypographyP, TypographySmall, TypographyTable } from '../typography'
import { ImageComponent } from '../imageComponent'
import { CustomBar, CustomDoughnut, CustomPie } from '../graph'
import { InnerLink, OuterLink } from '../link'
import { useWriter } from '@/context/writer'
import { checkAndResetGraph, checkDataset, checkLabels, resetGraph, } from '@/lib/graph'

export const ShowComponent = ({ articleData, index }: { articleData: DetailType, index: number }) => {

    const { updateData } = useWriter();
    if (articleData.type === "H1T") {
        return (
            <TypographyH1
                className={`${articleData.class}`}
                data={articleData.data}
                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })
                }}
            />
        )
    }
    else if (articleData.type === "H2T") {
        return (
            <TypographyH2 className={`${articleData.class}`} data={articleData.data}


                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })
                }} />
        )
    }
    else if (articleData.type === "H3T") {
        return (
            <TypographyH3 className={`${articleData.class}`} data={articleData.data}
                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })

                }}
            />
        )
    } else if (articleData.type === "P") {
        return (
            <TypographyP className={`${articleData.class}`} data={articleData.data}
                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })

                }}
            />
        )
    }
    else if (articleData.type === "List") {
        return (
            <TypographyList className={`${articleData.class}`} data={articleData.data}

                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })

                }}
            />
        )
    }
    else if (articleData.type === "BQ") {
        return (
            <Blockquote className={`${articleData.class}`} data={articleData.data}

                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })

                }}
            />
        )
    }
    else if (articleData.type === "Table" && articleData.data != null) {
        return (
            <TypographyTable className={`${articleData.class}`} table={articleData.data!} />
        )
    }
    else if (articleData.type === "Image") {
        return (
            <ImageComponent url={articleData.data!} alt={`article`} classData={"max-h-[300px] md:max-h-[600px] h-[55vh] xl:mx-20 my-5 "} />
        )
    }
    else if (articleData.type === "InLineCode") {
        return (
            <TypographyInlineCode className={`${articleData.class}`} data={articleData.data}
                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })

                }}
            />
        )
    }
    else if (articleData.type === "Lead") {
        return (
            <TypographyLead className={`${articleData.class}`} data={articleData.data}

                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })

                }}
            />
        )
    }
    else if (articleData.type === "Large") {
        return (
            <TypographyLarge className={`${articleData.class}`} data={articleData.data}
                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })

                }}
            />
        )
    }
    else if (articleData.type === "Small") {
        return (
            <TypographySmall className={`${articleData.class}`} data={articleData.data}
                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })

                }}
            />
        )
    }
    else if (articleData.type === "Muted") {
        return (
            <TypographyMuted className={`${articleData.class}`} data={articleData.data}

                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })

                }}
            />
        )
    }
    else if (articleData.type === "Bar") {
        return (
            <CustomBar
                className={`  ${articleData.class}`}
                data={
                    articleData.data
                }
                updateGraphData={({ graphData }: { graphData: GraphType }) => {
                    if (checkDataset({ data: articleData.data })) {
                        const data = resetGraph();
                        updateData({ index: index, data: data })
                    } else {
                        updateData({
                            index: index, data: graphData
                        })
                    }
                }}
                checkAndResetData={() => {
                    if (checkAndResetGraph({ data: articleData.data })) {
                        const data = resetGraph();
                        updateData({ index: index, data: data })
                    }
                }}
            />

        )
    }
    else if (articleData.type === "Pie") {
        return (
            <CustomPie
                className={`${articleData.class}`}
                data={
                    articleData.data
                }
                updateGraphData={({ graphData }: { graphData: GraphType }) => {
                    if (checkDataset({ data: articleData.data })) {
                        const data = resetGraph();
                        updateData({ index: index, data: data })
                    } else {
                        updateData({
                            index: index, data: graphData
                        })
                    }
                }}
                checkAndResetData={() => {
                    if (checkAndResetGraph({ data: articleData.data })) {
                        const data = resetGraph();
                        updateData({ index: index, data: data })
                    }
                }}

            />
        )
    }
    else if (articleData.type === "Doughnut") {
        return (

            <CustomDoughnut
                className={`  ${articleData.class}`}
                data={
                    articleData.data
                }
                updateGraphData={({ graphData }: { graphData: GraphType }) => {
                    if (checkDataset({ data: articleData.data })) {
                        const data = resetGraph();
                        updateData({ index: index, data: data })
                    } else {
                        updateData({
                            index: index, data: graphData
                        })
                    }
                }}
                checkAndResetData={() => {
                    if (checkAndResetGraph({ data: articleData.data })) {
                        const data = resetGraph();
                        updateData({ index: index, data: data })
                    }
                }}
            />
        )
    }
    else if (articleData.type === "OuterLink") {
        return (
            <OuterLink className={`${articleData.class}`} data={articleData.data} />
        )
    }
    else if (articleData.type === "InnerLink") {
        return (
            <InnerLink className={`${articleData.class}`} data={articleData.data} />
        )
    }


}
