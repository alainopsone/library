export default class FormValidator {
  constructor() {
    this.selectors = {
      form: '[data-form]',
      title: '[data-form-title]',
      error: '[data-form-error]',
    }
  }

  get form() {
    return document.querySelector(this.selectors.form)
  }

  get title() {
    return this.form.querySelector(this.selectors.title)
  }

  get error() {
    return this.form.querySelector(this.selectors.error)
  }

  checkValidity() {
    if (!this.isValid(this.title) || this.isEmpty(this.title)) {
      this.title.classList.add('border-pink-500', 'animate-shake')
      this.showError()
      return false
    } else {
      this.title.classList.remove('border-pink-500', 'animate-shake')
      this.removeError()
      return true
    }
  }

  isEmpty(input) {
    let isEmpty = true

    if (input.value.trim() !== '') {
      isEmpty = false
    }

    return isEmpty
  }

  isValid(input) {
    const regex = /^[a-zA-Z]{3,10}$/
    let isValidated = false

    if (regex.test(input.value)) {
      return true
    }

    return isValidated
  }

  showError() {
    this.error.classList.remove('hidden', 'invisible')
    this.error.textContent = 'Enter a title please.'
  }

  removeError() {
    this.error.classList.add('hidden', 'invisible')
  }
}