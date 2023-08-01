import { DetailType } from "@/interface/article";
import { moveCursor } from "./moveCursor";

export const arrowRightKey = async ({
  index,
  article,
}: {
  index: number;
  article: DetailType[];
}) => {
  const selection = window.getSelection();
  if (selection) {
    if (selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const caretPosition = range.endOffset;
    const textLength = article[index].data.length;
    if (caretPosition === textLength) {
      let lengthData = index + 1;
      if (lengthData >= article.length) lengthData = index;
      moveCursor({
        id: `EditAble-${article[lengthData].id}`,
        cursorEnd: false,
      });
    }
  }
  return;
};
