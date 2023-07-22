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

            let dataHolder = [
                {
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
                                "backgroundColor": ["#ffb703"],
                                "data": [
                                    21.9
                                ]
                            },
                            {
                                "label": "2021/2022 QI based Growth Percentage Performance",
                                "backgroundColor": ["#ffb703"],
                                "data": [
                                    34.1,
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
        updateArticle(article)
    }

    const updateType = ({ index, type }: { index: number, type: any }) => {
        let article = [...articleDetail]
        article[index].type = type;
        updateArticle(article)
    }

    const updateData = async ({ index, data }: { index: number, data: any }) => {
        let article = [...articleDetail]
        if (articleDetail[index].type === "H1T" ||
            articleDetail[index].type === "H2T" ||
            articleDetail[index].type === "H3T" ||
            articleDetail[index].type === "P" ||
            articleDetail[index].type === "List" ||
            articleDetail[index].type === "BQ" ||
            articleDetail[index].type === "InLineCode" ||
            articleDetail[index].type === "Lead" ||
            articleDetail[index].type === "Large" ||
            articleDetail[index].type === "Small" ||
            articleDetail[index].type === "Muted") {
            if (data.key === "Enter") {
                data.preventDefault();
                const createdValue = {
                    id: v4(),
                    "type": article[index].type,
                    "class": article[index].class,
                    "data": ""
                };
                if (index === data.length - 1) {
                    article = [...article, createdValue]
                }
                else {
                    article.splice(index + 1, 0, createdValue);
                }
                await updateArticle(article);
                setTimeout(() => {
                    moveCursor({ id: `EditAble-${article[index + 1].id}`, cursorEnd: false })
                }, 100)
                return;
            }

            if (data.key === "Backspace" && article[index].data === "") {
                data.preventDefault();
                console.log("here")
                const articleData = [...article.slice(0, index), ...article.slice(index + 1, data.length,)];
                updateArticle(articleData);
                let lengthData = index - 1;
                if (lengthData < 0) lengthData = 0;
                moveCursor({ id: `EditAble-${article[lengthData].id}`, cursorEnd: true })
                return;
            }

            if (data.key === "ArrowUp") {
                const selection = window.getSelection();
                if (selection) {
                    if (selection.rangeCount === 0) return;
                    const range = selection.getRangeAt(0);
                    const caretPosition = range.startOffset;
                    let lengthData = index - 1;
                    if (caretPosition === 0 && index > 0) {
                        moveCursor({ id: `EditAble-${article[lengthData].id}`, cursorEnd: true })
                    }
                }
                return;
            }

            if (data.key === "ArrowLeft") {
                const selection = window.getSelection();
                if (selection) {
                    if (selection.rangeCount === 0) return;
                    const range = selection.getRangeAt(0);
                    const caretPosition = range.startOffset;
                    let lengthData = index - 1;
                    if (caretPosition === 0 && index > 0) {
                        moveCursor({ id: `EditAble-${article[lengthData].id}`, cursorEnd: true })
                    }
                }
                return;
            }

            if (data.key === "ArrowDown") {

                const selection = window.getSelection();
                if (selection) {
                    if (selection.rangeCount === 0) return;

                    const range = selection.getRangeAt(0);
                    const caretPosition = range.endOffset;
                    const textLength = article[index].data.length;
                    if (caretPosition === textLength) {
                        let lengthData = index + 1;
                        if (lengthData >= article.length) lengthData = index;
                        moveCursor({ id: `EditAble-${article[lengthData].id}`, cursorEnd: false })
                    }
                }
                return;
            }

            if (data.key === "ArrowRight") {
                const selection = window.getSelection();
                if (selection) {
                    if (selection.rangeCount === 0) return;

                    const range = selection.getRangeAt(0);
                    const caretPosition = range.endOffset;
                    const textLength = article[index].data.length;
                    if (caretPosition === textLength) {
                        let lengthData = index + 1;
                        if (lengthData >= article.length) lengthData = index;
                        moveCursor({ id: `EditAble-${article[lengthData].id}`, cursorEnd: false })
                    }
                }
                return;
            }
            article[index].data = data.target.outerText;
        } else {
            article[index].data = data;
        }
        updateArticle(article)
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



    const moveCursor = async ({ id, cursorEnd }: { id: string, cursorEnd: boolean }) => {
        const el: any = document.getElementById(id);
        if (el) {
            if (cursorEnd) {
                setTimeout(() => {
                    el.focus();
                    const selection = window.getSelection();
                    const range = selection!.getRangeAt(0);
                    range.setEnd(range.endContainer, el.textContent.length);
                    range.collapse(false);
                    selection!.addRange(range);
                }, 100)
            } else {
                setTimeout(() => {
                    el.focus();
                }, 100)
            }
        }
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