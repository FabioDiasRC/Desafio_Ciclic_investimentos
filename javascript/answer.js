export default function answer(name, monthly, value, time ) {
  const divTop = document.getElementById("container__top")
  divTop.classList.add('invisible')

  const divBottom = document.getElementById("container__bottom")
  divBottom.classList.remove('invisible')

  //create a element for answer in the html pag
  const answer = document.createElement('div')
  const content = `
    <div>
      <p class='answer__response'> Olá <b>${name}</b>, juntando R$${monthly} todo mês você terá R$${value} dentro de ${time} anos.
    <div>
  `

  //append child for apply the content
  const answerDiv = document.querySelector('[container__bottom]')
  answer.innerHTML = content
  answerDiv.appendChild(answer)
};