import inputRestriction from "@/utils/inputRestriction";

const inputHandler = (e) => {
    const hasNumberRgx = /^[a-zA-Z ]*$/;
    const numberRgx = /[^a-zA-Z ]/g;
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