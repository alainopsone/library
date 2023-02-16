export default class Form {
  constructor() {
    this.selectors = {
      forms: 'form',
      inputs: 'input'
    }
  }

  get form() {
    return document.querySelectorAll(this.selectors.forms)
  }

  get inputs() {
    return this.form.querySelectorAll(this.selectors.inputs)
  }
}
