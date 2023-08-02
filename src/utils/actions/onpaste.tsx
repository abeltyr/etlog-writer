export const onPaste = async ({
    id,
    event,
    onUpdate
}: {
    id: string;
    event: any;
    onUpdate: Function
}) => {

    // event.preventDefault();

    // const text = event.clipboardData.getData('text/plain');
    // const selection = window.getSelection();
    // if (selection) {
    //     if (!selection.rangeCount) return false;
    //     selection.deleteFromDocument();
    //     const range = selection.getRangeAt(0);
    //     const textNode = document.createTextNode(text);
    //     range.insertNode(textNode);

    //     // Move the caret to the end of the inserted text
    //     range.setStartAfter(textNode);
    //     range.setEndAfter(textNode);
    //     selection.removeAllRanges();
    //     selection.addRange(range);
    // }


    // const el: any = document.getElementById(id);

    // if (el) {
    //     onUpdate(el.textContent)
    // }
};
