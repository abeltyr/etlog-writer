import { DetailType } from "@/interface/article";
import { v4 } from "uuid";
import { moveCursor } from "./moveCursor";

export const enterKey = async ({
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
  data.preventDefault();

  let newData = "";
  let articleData = article[index].data;

  const selection = window.getSelection();
  if (selection) {
    if (selection.rangeCount === 0) return;
    const range = selection.getRangeAt(0);
    const caretPosition = range.startOffset;

    const el: any = document.getElementById(
      `EditAble-${article[index].id}`,
    );

    articleData = el.textContent.slice(0, caretPosition);
    newData = el.textContent
      .slice(caretPosition, el.textContent.length)
      .trim();

    article[index].data = articleData;

  }

  let typeData = article[index].type;
  let classData = article[index].class;

  if (typeData === "H1T" || typeData === "H2T" || typeData === "H3T") {
    typeData = "P"
    classData = ""
  }

  const createdValue = {
    id: v4(),
    type: typeData,
    class: classData,
    data: newData,
  };

  if (index === data.length - 1) {
    article = [...article, createdValue];
  } else {
    article.splice(index + 1, 0, createdValue);
  }

  await updateArticle(article);

  setTimeout(() => {
    const el: any = document.getElementById(`EditAble-${article[index + 1].id}`);
    el.focus();
    const firstEl: any = document.getElementById(`EditAble-${article[index].id}`);
    if (firstEl) {
      firstEl.innerHTML = articleData;
    }
    moveCursor({
      id: `EditAble-${article[index + 1].id}`,
      cursorEnd: false,
      length: 0,
    });
  }, 0);
  return;
};
