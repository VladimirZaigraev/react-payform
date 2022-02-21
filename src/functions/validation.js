export const validationNumber = (numberCard, setNumberError) => {
  if (numberCard.length < 13) {
    setNumberError('Номер должен быть больше 12 цифр')
  } else if (numberCard.length === 0) {
    setNumberError('Поле не заполнено')
  } else {
    setNumberError('')
  }
}
export const validationMounth = (mounthCard, setMounthError) => {
  if(mounthCard > 0 && mounthCard !== " ") {
    setMounthError('')
    } else {
    setMounthError('Поле не заполнено')
  }
}
export const validationYear = (yearCard, setYearError) => {
  if(yearCard > 0 && yearCard !== " ") {
    setYearError('')
  } else {
    setYearError('Поле не заполнено')
  }
}
export const validationCvc = (cardCvc, setCvcError) => {
  if(cardCvc.length <= 2) {
    setCvcError('Введите 3 цифы')
  } else {
    setCvcError('')
  }
}
export const validationName = (nameCard, setNameError) => {
  if (nameCard.split(' ').length === 2) {
    setNameError('')
  } else {
    setNameError('Имя и фамилия должны состоять из 2 слов разделенных пробелом')
  }
}