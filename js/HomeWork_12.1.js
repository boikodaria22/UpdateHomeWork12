var cards = [
  '4567456745674567',
  '4282428242824282',
  '7224722472247224',
  '8147814781478147'
]

function xBet() {
  const money = +prompt('Введите сумму ставки:')
  return new Promise((resolve, reject) => {
      let random = Math.floor(Math.random() * (Math.floor(5) - (Math.ceil(-5)) + 1)) + (Math.ceil(-5));
      if(money)
        setTimeout(() => {
          random > 0 ? resolve({
            value: value = Math.abs(random * money),
            message: `Вы выиграли. Ваш выигрыш составляет ${value}`
          }) : reject('Вы проиграли. Ваши деньги сгорели');
        }, 3000)
    })
     
   
}
function getMoney(sumMoney) {
  const cardNumber = +prompt('Введите номер карты для вывода выиграша:')
  return new Promise((resolve, reject) => {
    if (cardNumber)
      setTimeout(() => {
        (cards.includes(String(cardNumber))) ? resolve(`Ваш выиграш в размере ${sumMoney}, был выведен на карту с номером ${cardNumber}. Поздравляем!`) : reject('Пользователя с таким номером не сушествует')
      }, 3000)
  })
}

xBet().then((response) => {
  console.log(response.message);
  getMoney(response.value)
   .then((response) => console.log(response))
   .catch((error) => console.log(error))
})
  .catch((error) => console.log(error))
