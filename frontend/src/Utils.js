const toggleStateClass = (element, state, force) => {
  element.classList.toggle(state, force)
}

const lockElement = (element, bool) => {
  document.querySelector(element).classList.toggle('overflow-hidden', bool)
}

const delegateEventToDocument = (selector, eventType, cb) => {
  document.addEventListener(eventType, event => {
    if (event.target === selector || event.target.closest(selector)) {
      cb()
    }
  })
}

export { toggleStateClass, lockElement, delegateEventToDocument }
