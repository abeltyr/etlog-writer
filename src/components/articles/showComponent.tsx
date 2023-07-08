import React from 'react'
import { VerticalCard } from '../card'
import { DetailType } from '@/interface/article'
import { AdsComponent } from '../advertisement'
import { Blockquote, TypographyH1, TypographyH2, TypographyH3, TypographyInlineCode, TypographyLarge, TypographyLead, TypographyList, TypographyMuted, TypographyP, TypographySmall, TypographyTable } from '../typography'
import { ImageComponent } from '../imageComponent'
import { CustomBar, CustomDoughnut, CustomPie } from '../graph'
import { InnerLink, OuterLink } from '../link'
import { useWriter } from '@/context/writer'

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
                    console.log(event)
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
                    console.log(event)
                }} />
        )
    }
    else if (articleData.type === "H3T") {
        return (
            <TypographyH3 className={`${articleData.class}`} data={articleData.data}
                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })
                    console.log(event)
                }}
            />
        )
    } else if (articleData.type === "P") {
        return (
            <TypographyP className={`${articleData.class}`} data={articleData.data}
                id={`EditAble-${articleData.id}`}
                onUpdate={(event: any) => {
                    updateData({ index: index, data: event.target.outerText })
                    console.log(event)
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
                    console.log(event)
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
                    console.log(event)
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
                    console.log(event)
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
                    console.log(event)
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
                    console.log(event)
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
                    console.log(event)
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
                    console.log(event)
                }}
            />
        )
    }
    else if (articleData.type === "Bar") {
        return (
            <CustomBar
                legendPosition={articleData.data.legendPosition}
                title={articleData.data.title}
                className={`  ${articleData.class}`}
                data={
                    articleData.data.detail
                }
            />

        )
    }
    else if (articleData.type === "Pie") {
        return (

            <CustomPie
                legendPosition={articleData.data.legendPosition}
                title={articleData.data.title}
                className={`  ${articleData.class}`}
                data={
                    articleData.data.detail
                }
            />
        )
    }
    else if (articleData.type === "Doughnut") {
        return (

            <CustomDoughnut
                legendPosition={articleData.data.legendPosition}
                title={articleData.data.title}
                className={`  ${articleData.class}`}
                data={
                    articleData.data.detail
                }
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
    else if (articleData.type === "AD") {
        return <div className='w-full md:w-auto my-2 bg-neutral  grid rounded-lg items-center'>
            <AdsComponent />
        </div>
    }


}
