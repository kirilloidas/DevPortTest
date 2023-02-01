export default (e, hasNumberRgx, numberRgx) => {
    if (hasNumberRgx.test(e.target.value) === false) {
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        e.target.value = e.target.value.replace(numberRgx, '');
        e.target.setSelectionRange(start, end);
        e.target.dispatchEvent(new CustomEvent('input'))
      }
}