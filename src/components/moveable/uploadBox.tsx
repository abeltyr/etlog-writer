import React, { useState } from 'react'
import { useWriter } from '@/context/writer';
import UploadSVG from '@/assets/icons/upload';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DetailType } from '@/interface/article';
import { v4 } from 'uuid';
import { checkAndResetGraph } from '@/lib/graph';

export const UploadBox = () => {

    const [passed, setPassed] = useState(false)
    const { updateArticle } = useWriter()
    const [error, setError] = useState(false)
    const [open, setOpen] = useState(false)
    const [article, setArticle] = useState<DetailType[]>([])
    return (
        <div className='fixed bottom-28 left-9 w-14 h-14  cursor-pointer bg-neutral-content text-base-100  flex justify-center items-center rounded-xl hover:scale-110 duration-500 '
        >
            <Dialog open={open}>
                <DialogTrigger>
                    <div className='w-14 h-14 px-3' onClick={() => { setOpen(true) }}>
                        <UploadSVG width='100%' height='100%' />
                    </div>
                </DialogTrigger>
                <DialogContent className='bg-base-300 border-base-100'>
                    <DialogHeader >
                        <DialogTitle>Upload Article File</DialogTitle>

                        <DialogDescription>
                            <p className='my-2'>
                                upload existing article files and update them here.
                                <br /> Note the current article your are working on will be overridden
                            </p>
                            <Input className='mt-4 flex-1 bg-transparent border-neutral outline-none focus:outline-none focus:border-neutral-content/90 duration-500'

                                type="file"
                                onInput={(event: any) => {
                                    setPassed(false)
                                    setError(false)

                                    var reader = new FileReader();
                                    reader.onload = (event: any) => {
                                        let errorData = false;
                                        try {
                                            const articleDetail = JSON.parse(event.target.result);
                                            for (let dataIndex in articleDetail) {
                                                if (articleDetail[dataIndex].id != null) {
                                                    articleDetail[dataIndex].id = v4();
                                                } else if (articleDetail[dataIndex].type === null ||
                                                    (articleDetail[dataIndex].type != "H1T" &&
                                                        articleDetail[dataIndex].type != "H2T" &&
                                                        articleDetail[dataIndex].type != "H3T" &&
                                                        articleDetail[dataIndex].type != "P" &&
                                                        articleDetail[dataIndex].type != "List" &&
                                                        articleDetail[dataIndex].type != "BQ" &&
                                                        articleDetail[dataIndex].type != "Table" &&
                                                        articleDetail[dataIndex].type != "Image" &&
                                                        articleDetail[dataIndex].type != "InLineCode" &&
                                                        articleDetail[dataIndex].type != "Lead" &&
                                                        articleDetail[dataIndex].type != "Large" &&
                                                        articleDetail[dataIndex].type != "Small" &&
                                                        articleDetail[dataIndex].type != "Muted" &&
                                                        articleDetail[dataIndex].type != "Bar" &&
                                                        articleDetail[dataIndex].type != "Pie" &&
                                                        articleDetail[dataIndex].type != "Doughnut" &&
                                                        articleDetail[dataIndex].type != "OuterLink" &&
                                                        articleDetail[dataIndex].type != "InnerLink")

                                                ) {
                                                    errorData = true;
                                                    break;
                                                } else if (articleDetail[dataIndex].data === null || !articleDetail[dataIndex].data) {

                                                    errorData = true;
                                                    break;
                                                }

                                                if (
                                                    articleDetail[dataIndex].type != null &&
                                                    (articleDetail[dataIndex].type === "Bar" || articleDetail[dataIndex].type === "Pie" || articleDetail[dataIndex].type === "Doughnut") &&
                                                    checkAndResetGraph({ data: articleDetail[dataIndex].data })
                                                ) {
                                                    errorData = true;
                                                    break;

                                                }

                                                if (articleDetail[dataIndex].type != null &&
                                                    (
                                                        articleDetail[dataIndex].type === "H1T" ||
                                                        articleDetail[dataIndex].type === "H2T" ||
                                                        articleDetail[dataIndex].type === "H3T" ||
                                                        articleDetail[dataIndex].type === "P" ||
                                                        articleDetail[dataIndex].type === "List" ||
                                                        articleDetail[dataIndex].type === "BQ" ||
                                                        articleDetail[dataIndex].type === "InLineCode" ||
                                                        articleDetail[dataIndex].type === "Lead" ||
                                                        articleDetail[dataIndex].type === "Large" ||
                                                        articleDetail[dataIndex].type === "Small" ||
                                                        articleDetail[dataIndex].type === "Muted")
                                                    && typeof (articleDetail[dataIndex].data) != "string") {
                                                    errorData = true;
                                                    break;
                                                }
                                            }

                                            setError(errorData)
                                            if (!errorData) {
                                                setPassed(true)
                                                setArticle(articleDetail)
                                            }
                                        } catch (e) {
                                            setError(true)
                                        }
                                    };
                                    reader.readAsText(event.target.files[0]);
                                }}
                            />
                            {error && <p className='text-error mx-1 my-1 mt-2 text-xs'>
                                Please only upload file generated here or following the same formate
                            </p>}
                            <div className='mt-4 flex justify-between '>
                                <Button
                                    onClick={() => {
                                        setOpen(false)
                                    }}
                                    variant="outline" className='focus:bg-transparent focus:scale-110 duration-500 transition-all hover:bg-transparent hover:scale-105'>Cancel</Button>
                                <Button disabled={!passed} className='bg-neutral text-base-content focus:bg-accent focus:text-accent-content hover:bg-accent hover:text-accent-content duration-500' onClick={() => {
                                    updateArticle(article);
                                    setOpen(false);
                                }}>Save</Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>

    )
}

