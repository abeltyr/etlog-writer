export const moveCursor = async ({
  id,
  cursorEnd,
  length,
}: {
  id: string;
  cursorEnd: boolean;
  length?: number;
}) => {
  const el: any = document.getElementById(id);
  if (el) {
    let lengthData = el.textContent.length;
    if (length) lengthData = length;
    if (cursorEnd) {
      setTimeout(() => {
        el.focus();
        const selection = window.getSelection();
        const range = selection!.getRangeAt(0);
        range.setEnd(range.endContainer, lengthData);
        range.collapse(false);
        selection!.addRange(range);
      }, 100);
    } else {
      setTimeout(() => {
        el.focus();
      }, 100);
    }
  }
};
