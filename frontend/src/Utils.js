const toggleStateClass = (element, state, force) => {
  element.classList.toggle(state, force)
}

const open = (element, state) => {
  toggleStateClass(element, state, true)
}

const close = (element, state) => {
  toggleStateClass(element, state, false)
}

const lockElement = (element, bool) => {
  document.querySelector(element).classList.toggle('overflow-hidden', bool)
}

export { open, close, toggleStateClass, lockElement }
