'use strict'

const Classlist = document.querySelectorAll('button')


// console.log(Classlist[0].classList.length) // uzunligini chiqarib beradi
//
// console.log(Classlist[0].classList.item(1)) // class nomini chiqarib beradi
//
// console.log(Classlist[0].classList.remove('blue')) // ochirib tashidi
//
// console.log(Classlist[1].classList.add('blue', 'hello')) // qoshib beradi
//
// console.log(Classlist[0].classList.toggle('blue')) // bor bosa ociradi yoq bosa qoshadi

// if (Classlist[0].classList.contains('blue')){ // agar 1 elementda blue bosa yeap dib ciqar
//   console.log('yeap')
// }

// Classlist[0].addEventListener('click', () =>{ //hodisa qoshdik
//   if (!Classlist[1].classList.contains('red')){ // agar qizil yoq bolsa
//     Classlist[1].classList.add('red') //qizil qosh
//   }else {
//     Classlist[1].classList.remove('red') // bor bolsa ochir
//   }
// })

// 4 ta qatorni bittada chiqarish mumkin

// Classlist[0].addEventListener('click', () =>{
//    Classlist[1].classList.toggle('red') // mana shunday
// })

const wrapper = document.querySelector('.btn-block')
//

Classlist[0].addEventListener('click', () =>{
   Classlist[1].classList.toggle('red') // biza umumiy ona divimizzi olganimiza uchun
  // bu hodisa har biri ucgun ishlidi yangi qoshgan elementimiz uchun ham
})



wrapper.addEventListener('click', (salom) =>{ // hodisa qoshamiza
  if (salom.target && salom.target.tagName == 'BUTTON'){
    console.log('clicke')
  }
})


// Classlist.forEach((salom) => { // massivdan kelgan malumotlani
//   salom.addEventListener('click', () => {
//     console.log("Clikked")
//   })
// })


const btn = document.createElement('button')

btn.classList.add('red')

wrapper.append(btn)











