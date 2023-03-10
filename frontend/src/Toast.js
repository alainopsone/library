export default class Toast {
  constructor({ successText = 'item successfully added', failedText = 'failed to add' } = {}) {
    this.successText = successText
    this.selectors = {
      toastContainer: '[data-toast-container]'
    }
    this.init()
  }

  init() {
    this.triggerToast()
  }

  get toastParentElement() {
    return document.querySelector(this.selectors.toastContainer)
  }

  get failedText() { return this._failedText }
  get successText() { return this._successText }

  set failedText(text) {
    this._failedText = text

    return this._failedText
  }

  set successText(text) {
    this._successText = text

    return this._successText
  }

  triggerToast() {
    this.createToastContent()

    setTimeout(() => {
      this.removeToast()
    }, 3000)
  }

  removeToast() {
    this.content?.remove()
  }

  createToastContent() {
    const p = document.createElement('p')

    p.classList.add('w-full', 'p-4', 'border-solid', 'border-2', 'rounded', 'border-blue-400')
    p.textContent = this.successText
    this.toastParentElement ? this.toastParentElement.appendChild(p) : this.createToastParentElement().appendChild(p)
    this.content = p
  }
}
