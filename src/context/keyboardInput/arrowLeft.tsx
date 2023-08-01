import { DetailType } from "@/interface/article";
import { moveCursor } from "./moveCursor";

export const arrowLeftKey = async ({
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
    const caretPosition = range.startOffset;
    let lengthData = index - 1;
    if (caretPosition === 0 && index > 0) {
      moveCursor({ id: `EditAble-${article[lengthData].id}`, cursorEnd: true });
    }
  }
  return;
};
