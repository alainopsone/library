// eslint-disable-next-line import/no-absolute-path
import spinner from '/spinner.svg'

const showError = input => {
  if (!input) return

  const err = input.nextElementSibling

  input.classList.add('border-pink-500', 'animate-shake')
  err.classList.remove('invisible')
}

const removeError = input => {
  if (!input) return

  const err = input.nextElementSibling

  input.classList.remove('border-pink-500', 'animate-shake')
  err.classList.add('invisible')
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

const inputIsValid = (input, options = {}) => {
  const {
    minLength = 2,
    maxLength = 22
  } = options

  if (input.value.trim() === '') {
    showError(input)
    return false
  } else if (input.value.length <= minLength || input.value.length >= maxLength) {
    showError(input)
    return false
  } else {
    removeError(input)
    return true
  }
}

const isLoading = targetElement => {
  const loadingContainer = document.createElement('div')
  const loadingImage = document.createElement('img')

  loadingContainer.classList.add('absolute', 'inset-0', 'grid', 'place-content-center', 'bg-gray-100')
  loadingImage.classList.add('w-8', 'animate-spinner')
  loadingImage.src = spinner

  loadingContainer.appendChild(loadingImage)
  targetElement.classList.add('relative')
  targetElement.appendChild(loadingContainer)

  setTimeout(() => {
    targetElement.removeChild(loadingContainer)
  }, 1500)
}

export {
  removeError,
  inputIsValid,
  getInputType,
  isLoading
}
