const toggleStateClass = (element, state, force) => {
  element.classList.toggle(state, force)
}

const lockElement = (element, bool) => {
  document.querySelector(element).classList.toggle('overflow-hidden', bool)
}

const delegate = () => {

}

export { toggleStateClass, lockElement, delegate }
