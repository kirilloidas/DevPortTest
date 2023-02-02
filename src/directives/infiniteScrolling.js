const scrollHandler = ({value}, {target}) => {
    if (target.clientHeight + target.scrollTop >= target.scrollHeight - 20) {
          value()
      }
}

export default {
    bind(el, binding) {
        el.addEventListener('scroll', scrollHandler.bind(null, binding))
    },
    unbind(el, binding) {
        el.removeEventListener('scroll', scrollHandler.bind(null, binding))
    }
}