import { DetailType } from "@/interface/article";
import { moveCursor } from "./moveCursor";

export const backspaceKey = async ({
  index,
  data,
  article,
  updateArticle,
}: {
  index: number;
  data: any;
  article: DetailType[];
  updateArticle: Function;
}) => {

  const selection = window.getSelection();


  if (article[index].data === "" && article.length > 1) {
    data.preventDefault();
    const articleData = [
      ...article.slice(0, index),
      ...article.slice(index + 1, data.length),
    ];
    updateArticle(articleData);
    let lengthData = index - 1;
    if (lengthData < 0) lengthData = 0;
    moveCursor({ id: `EditAble-${article[lengthData].id}`, cursorEnd: true });
    return;
  }

  if (selection) {
    if (selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const caretPosition = range.startOffset;
    let lengthData = index - 1;

    var selectedText = selection.toString();



    const el: any = document.getElementById(
      `EditAble-${article[index].id}`,
    );


    const bodyText = article[index].data.replace(/\s/g, "");
    selectedText = selectedText.replace(/\s/g, "");

    if (caretPosition === 0 && index > 0 && selectedText.length === 0) {
      const data = article[lengthData].data + " " + article[index].data;
      moveCursor({
        id: `EditAble-${article[lengthData].id}`,
        cursorEnd: true,
        length: article[lengthData].data.length + 1,
      });

      article[lengthData].data = data;
      const articleData = [
        ...article.slice(0, index),
        ...article.slice(index + 1, data.length),
      ];

      updateArticle(articleData);
      const el: any = document.getElementById(
        `EditAble-${article[lengthData].id}`,
      );
      if (el) {
        el.innerHTML = data;
      }
    }


    // this is triggered when all the text is selected and deleted
    if (bodyText === selectedText && article.length > 1) {
      const articleData = [
        ...article.slice(0, index),
        ...article.slice(index + 1, data.length),
      ];
      updateArticle(articleData);
      let lengthData = index - 1;
      if (lengthData < 0) lengthData = 0;
      if (index > 0)
        moveCursor({ id: `EditAble-${article[lengthData].id}`, cursorEnd: true });
      return;
    }

    return;
  }
};
