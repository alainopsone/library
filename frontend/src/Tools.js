const isEmpty = (input) => {
  let isEmpty = true

  if (input.value.trim() !== '') {
    isEmpty = false
  }

  return isEmpty
}

const isMinLength = (input) => {
  const regex = /^[a-zA-Z]{3,}$/
  let isValidated = false

  if (regex.test(input.value)) {
    isValidated = true
  }

  return isValidated
}

const showError = (input) => {
  if (input) {
    const err = input.nextElementSibling
    input.classList.add('border-pink-500', 'animate-shake')

    err.classList.remove('invisible')
  }
}

const removeError = (input) => {
  if (input) {
    const err = input.nextElementSibling
    input.classList.remove('border-pink-500', 'animate-shake')

    err.classList.add('invisible')
  }
}

const getInputType = input => {
  switch (input.type) {
    case 'text':
      console.log('--- input type text ---')
      break
    case 'number':
      console.log('--- input type number ---')
      break
    case 'email':
      console.log('--- input type email ---')
      break
    case 'password':
      console.log('--- input type password ---')
      break
    case 'checkbox':
    case 'radio':
      console.log('--- input type checkbox or radio ---')
      break
    default:
      console.log('--- input type unknown ---')
  }
}

const inputIsValid = (input, { minLength: min = 2, maxLength: max = 22 } = {}) => {
  if (input.value.trim() === '') {
    showError(input)
    return false
  } else if (input.value.length <= min || input.value.length >= max) {
    showError(input)
    return false
  } else {
    removeError(input)
    return true
  }
}

export {
  isEmpty,
  isMinLength,
  showError,
  removeError,
  inputIsValid,
  getInputType
}
