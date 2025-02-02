
const dogsList = document.querySelector('.dogs-list')



data.forEach((dogJSData) => {
  renderDogCard(dogJSData)
})

function renderDogCard (dogJSData){
  const li = document.createElement('li')
  dogsList.appendChild(li)
  li.setAttribute('class', 'dogs-list__button')
  li.innerText = dogJSData.name

  li.addEventListener('click', () => {
    
    const dogCard = document.querySelector('.main__dog-section')
    dogCard.innerHTML = ''

    const dogName = document.createElement('h2')
    dogName.innerText = dogJSData.name
    dogCard.appendChild(dogName)

    dogImg = document.createElement('img')
    dogImg.src = dogJSData.image
    dogCard.appendChild(dogImg)
    dogImg.setAttribute('height', '300px')
    dogImg.setAttribute('width', '500px')

    bio = document.createElement('h3')
    bio.innerText = 'Bio'
    dogCard.appendChild(bio)

    desc = document.createElement('p')
    desc.innerText = dogJSData.bio
    dogCard.appendChild(desc)

    buttonDiv= document.createElement('div')
    buttonDiv.setAttribute('class', 'main__dog-section__btn')
    goodOrNot = document.createElement('p')
    goodOrNot.setAttribute('style', 'font-style: italic')
    goodDogButton = document.createElement('button')

    dogCard.appendChild(buttonDiv)

    if (dogJSData.isGoodDog === true){
      goodOrNot.innerText = 'is Naughty?' + ' ' + 'yes!'
      goodDogButton.innerText = 'Good'
    }
    else{
      goodOrNot.innerText = 'is Naughty?' + ' ' + 'no!'
      goodDogButton.innerText = 'Bad'
    }

    buttonDiv.appendChild(goodOrNot)
    buttonDiv.appendChild(goodDogButton)
  })
}
;

// click on + button and empty form displays
// new dog is created next to + 
// 

const createNewDog = document.querySelector(".dogs-list__button--add")
createNewDog.addEventListener('click', () => {

  const dogCard = document.querySelector('.main__dog-section')
  dogCard.innerHTML = ''
  const newForm = document.createElement('form')
  dogCard.appendChild(newForm)
  newForm.setAttribute('class', 'form')

  const label1 = document.createElement('label')
  label1.innerText = 'Dog name'
  label1.setAttribute('for', 'name')
  newForm.append(label1)

  const input1 = document.createElement('input')
  input1.setAttribute('type', 'text')
  input1.setAttribute('id', 'name')
  input1.setAttribute('name', 'name')

  // input1.setAttribute('id,', 'name')

  newForm.append(input1)

  const label2 = document.createElement('label')
  label2.innerText = 'Dog picture'
  newForm.append(label2)

  const input2 = document.createElement('input')
  input2.setAttribute('type', 'url')
  newForm.append(input2)

  const label3 = document.createElement('label')
  label3.innerText = ('dog bio')
  newForm.append(label3)

  const textarea = document.createElement('textarea')
  textarea.setAttribute('rows', '5')
  newForm.append(textarea)

  const submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('id', 'submit')
  submit.setAttribute('value', "let's add a dog!")
  submit.setAttribute('class', 'form__button')

  newForm.append(submit)

  submit.addEventListener('click', (event) => {
    const newDog = {}
  
    const name = document.querySelector('#name').value
    newDog.name = name
    newDog.image = input2.value
    newDog.bio = textarea.value

    data.unshift(newDog)
    event.preventDefault()

    renderDogCard(newDog)
    dogsList.insertBefore(newDogItem, dogsList.children[1])


  })
})
