const toggleStateClass = (element, state, force) => {
  element.classList.toggle(state, force)
}

const lockElement = (selector, bool) => {
  const element = document.querySelector(selector)

  toggleStateClass(element, 'overflow-hidden', bool)
}

const delegateEventToDocument = (selector, eventType, cb, options = {}) => {
  document.addEventListener(eventType, event => {
    if (event.target === selector || event.target.closest(selector)) {
      cb()
    }
  }, options)
}

export { toggleStateClass, lockElement, delegateEventToDocument }
