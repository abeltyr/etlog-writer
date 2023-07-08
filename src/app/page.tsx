'use client'
import { ShowComponent } from '@/components/articles';
import { resetServerContext, DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { useWriter } from '@/context/writer';
import { DownloadBox, MenuList } from '@/components/moveable';
import { useEffect, useState } from 'react';

export default function HomePage() {
  useEffect(() => {
    resetServerContext()
  }, [])

  const { updateArticle, articleDetail } = useWriter();

  const [droppableId] = useState<string>("a961adfe-de5a-49de-a3a2-3176176b8242");

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return
    const { source, destination } = result;
    let copy = [...articleDetail]
    let [removed] = copy.splice(source.index, 1)
    copy.splice(destination.index, 0, removed)
    updateArticle(copy)

  };

  return (
    <main className="bg-base-100 base-content flex flex-col items-center justify-between overflow-x-hidden">
      <div className='max-w-[1440px] min-w-[320px] py-20
    px-4 xs:px-8 sm:px-10 md:px-24 lg:px-48 xl:px-64 w-screen'>
        <article className="mx-auto space-y-6 min-h-screen">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={droppableId}>
              {(provided, snapshot) => {
                return <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {articleDetail.map((detail, index) => {
                    return (<Draggable key={detail.id} draggableId={detail.id} index={index} >
                      {(provided, _) => {
                        return (<div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className='my-2'>
                          <div className='w-full flex gap-x-2 items-start '>
                            <div className='mt-1'>
                              <MenuList index={index} />
                            </div>
                            <div className='flex-1' >
                              <ShowComponent articleData={detail} index={index} />
                            </div>
                          </div>
                        </div>
                        )
                      }}
                    </Draggable>)
                  })}

                  {provided.placeholder}
                </div>
              }}
            </Droppable>
          </DragDropContext>
        </article>
      </div>
      <DownloadBox />
    </main>
  )
}
