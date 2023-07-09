'use client'

import { DetailType } from '@/interface/article';
import React, { useContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const initialValues: {
    articleDetail: DetailType[],
    updateArticle: Function,
    updateDetail: Function,
    updateType: Function,
    updateData: Function,
    download: Function,
} = {
    articleDetail: [],
    updateArticle: () => { },
    updateDetail: ({ index, detail }: { index: number, detail: DetailType }) => { },
    updateType: ({ index, type }: { index: number, type: string }) => { },
    updateData: ({ index, data }: { index: number, data: any }) => { },
    download: () => { },
};

type Props = {
    children?: React.ReactNode;
};

const WriterContext = React.createContext(initialValues);

const useWriter = () => useContext(WriterContext);

const WriterProvider: React.FC<Props> = ({ children }) => {

    const [articleDetail, setArticleDetail] = useState<DetailType[]>([

    ])


    useEffect(() => {
        const data = localStorage.getItem("article");

        if (data) {
            const articleData = JSON.parse(data!)
            setArticleDetail(articleData)
        } else {

            let dataHolder = [{
                id: v4(),
                "type": "P",
                "class": "",
                "data": "The overall Federal government revenue in 2022/2023 was Birr 97.8 billion which was fully collected from domestic sources. Tax revenue accounted for about Birr 91.3 billion or 93.3 percent of domestic revenue and the remaining Birr 6.6 billion or 6.7 percent was generated from non-taxes."
            },
            {
                id: v4(),
                "type": "P",
                "class": "",
                "data": "No grant and relief was received during the review quarter. Indirect tax exhibited a 27.7 percent quarterly growth while direct tax revenue rose by 46.7 percent compared to last year the same period."
            },
            {
                id: v4(),
                "type": "Small",
                "class": "flex w-full justify-center pb-4 pt-4 text-center",
                "data": "Total Revenue (In Millions of Birr)"
            },
            {
                id: v4(),
                "type": "Bar",
                "class": "",
                "data": {
                    "legendPosition": "bottom",
                    "labels": [
                        "2021/22 QI",
                        "2021/22 QIV",
                        "2022/23 QI"
                    ],
                    "datasets": [
                        {
                            "label": "Total Domestic Revenue: (In Millions of Birr)",
                            "backgroundColor": ["#ffb703", "#ffb703", "#ffb703"],
                            "data": [
                                72998.60,
                                93388.40,
                                97886.40
                            ]
                        }
                    ]

                }
            },
            {
                id: v4(),
                "type": "Small",
                "class": "flex w-full justify-center text-center",
                "data": "Total Revenue Growth Percentage"
            },
            {
                id: v4(),
                "type": "Bar",
                "class": "",
                "data": {
                    "legendPosition": "bottom",
                    "labels": [
                        "Total Domestic Revenue"
                    ],
                    "datasets": [
                        {
                            "label": "2021/2022 QIV based Growth Percentage Performance",
                            "backgroundColor": ["#ffb703", "#ffb703", "#ffb703"],
                            "data": [
                                21.9
                            ]
                        },
                        {
                            "label": "2021/2022 QI based Growth Percentage Performance",
                            "backgroundColor": ["#ffb703", "#ffb703", "#ffb703"],
                            "data": [
                                34.1
                            ]
                        }
                    ]
                }
            },
            {
                id: v4(),
                "type": "BQ",
                "class": "",
                "data": "It's important to note that tax rates, thresholds, and regulations may change over time, so individuals and businesses in Ethiopia should stay updated on any amendments to the tax laws. Consulting with a tax professional or contacting the Ethiopian Revenue and Customs Authority (ERCA) can provide the most accurate and up-to-date information regarding taxes in Ethiopia."
            }]

            setArticleDetail(dataHolder)

        }

    }, [])

    const updateArticle = (detail: DetailType[]) => {
        setArticleDetail(detail);
        localStorage.setItem("article", JSON.stringify(detail));
    }
    const updateDetail = ({ index, detail }: { index: number, detail: DetailType }) => {
        let article = [...articleDetail]
        article[index] = detail;
        setArticleDetail(article);
        localStorage.setItem("article", JSON.stringify(article));
    }

    const updateType = ({ index, type }: { index: number, type: any }) => {
        let article = [...articleDetail]
        article[index].type = type;
        setArticleDetail(article);
        localStorage.setItem("article", JSON.stringify(article));
    }

    const updateData = ({ index, data }: { index: number, data: any }) => {
        let article = [...articleDetail]
        article[index].data = data;
        setArticleDetail(article);
        localStorage.setItem("article", JSON.stringify(article));
    }


    const download = ({ title }: { title: string }) => {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(articleDetail));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", title + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }




    return (
        <WriterContext.Provider
            value={{
                articleDetail,
                updateArticle,
                updateDetail,
                updateType,
                updateData,
                download
            }}
        >
            {children}
        </WriterContext.Provider>
    );
};

export { WriterProvider, useWriter };