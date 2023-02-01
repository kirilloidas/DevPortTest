import inputRestriction from "@/utils/inputRestriction";

const inputHandler = (e) => {
    const hasNumberRgx = /^[0-9()-+ ]*$/;
    const numberRgx = /[^0-9()-+ ]/g;
    inputRestriction(e, hasNumberRgx, numberRgx)
}

export default {
    bind(el) {
        el.addEventListener('input', inputHandler)
    },
    unbind(el) {
        el.removeEventListener('input', inputHandler)
    }
}