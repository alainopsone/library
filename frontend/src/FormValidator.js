export default class FormValidator {
  constructor() {
    this.selectors = {
      form: '[data-form]',
      title: '[data-form-title]',
      errors: '[data-form-error]',
      inputs: 'input'
    }
  }

  get form() {
    return document.querySelector(this.selectors.form)
  }

  get title() {
    return this.form.querySelector(this.selectors.title)
  }

  get errors() {
    return this.form.querySelectorAll(this.selectors.errors)
  }

  get inputs() {
    return this.form.querySelectorAll(this.selectors.inputs)
  }

  checkValidity() {
    this.inputs.forEach(input => {
      if (input.getAttribute('type') === 'text') {
        if (!this.isMinLength(input) || this.isEmpty(input)) {
          input.classList.add('border-pink-500', 'animate-shake')
          this.showError()
          return false
        } else {
          input.classList.remove('border-pink-500', 'animate-shake')
          this.removeError()
          return true
        }
      }
    })
  }

  isEmpty(input) {
    let isEmpty = true

    if (input.value.trim() !== '') {
      isEmpty = false
    }

    return isEmpty
  }

  isMinLength(input) {
    const regex = /^[a-zA-Z]{3,}$/
    let isValidated = false

    if (regex.test(input.value)) {
      isValidated = true
    }

    return isValidated
  }

  showError() {
    this.errors.forEach(error => {
      error.classList.remove('hidden', 'invisible')
    })
  }

  removeError() {
    this.errors.forEach(error => {
      error.classList.add('hidden', 'invisible')
    })
  }
}
