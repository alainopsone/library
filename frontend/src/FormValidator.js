import Form from './Form'
export default class FormValidator extends Form {
  constructor() {
    super()

    this.selectors = {
      errors: super.errors,
      inputs: super.inputs
    }
  }

  checkValidity() {
    this.selectors.inputs.forEach(input => {
      if (input.getAttribute('type') === 'text') {
        if (!this.isMinLength(input) || this.isEmpty(input)) {
          this.showError(input)

          return false
        } else {
          this.removeError(input)

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

  showError(input) {
    if (input) {
      const err = input.nextElementSibling
      input.classList.add('border-pink-500', 'animate-shake')

      err.classList.remove('hidden', 'invisible')
    }
  }

  removeError(input) {
    if (input) {
      const err = input.nextElementSibling
      input.classList.remove('border-pink-500', 'animate-shake')

      err.classList.add('hidden', 'invisible')
    }
  }
}
