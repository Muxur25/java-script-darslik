'use strict'

document.addEventListener('DOMContentLoaded', () =>{
  const adv = document.querySelectorAll('.promo__adv img'),
      wrapper = document.querySelector('.promo__bg'),
      genre = wrapper.querySelector('.promo__genre'),

      addform = document.querySelector('form.add'),
      fommi = addform.querySelector('.adding__input'),
      chekcbox = addform.querySelector('[type="checkbox"]')







  adv.forEach((item) => {
    item.remove()
  })

  genre.textContent = 'comedy'

  wrapper.style.backgroundImage = 'url("img/1.jpg")'







  addform.addEventListener('submit', (event) =>{
    event.preventDefault() // mana shunday yangilanmaydigan qildik
    let newseries = fommi.value  // newseriesdagi valuesini oldik
    const chekked = chekcbox.checked // chekked ptichkasini kordik bolean malumot qaytafadi
    if (newseries){
        if (newseries.length > 18){ // agar 18 tadan yuqori bolsa qoshadigan narsamiza ... qilamiz
            newseries = `${newseries.substring(0, 18)}...`
        }
        if (chekked){
          console.log("Sevimli serial qoshiadi")
        }
        seriesDB.series.push(newseries) // royhatga newseriesni qoshamiza
        sartirovka(seriesDB.series) // sartirovka qilamiza
        CreateNewSeries(seriesDB.series, seriesList)
    }

    event.target.reset() // bu osha formaga narsa yozib qoshganimizdan keyin formadagi narsa ocadi

  })



})
  let seriesDB = {
    series: [
      'Omar',
      'The Final Legacy',
      'Ertugrul',
      'Magnificent Century',
      'The Great Seljuks: Guardians...',
    ],
  }



  function sartirovka(sort){
    sort.sort()
  }

  sartirovka(seriesDB.series)
  function CreateNewSeries(vallue, parrent){
    parrent.innerHTML = ''

    vallue.forEach((item, idx) => {
      parrent.innerHTML += `
      <li class="promo__interactive-item">${idx + 1} ${item}
        <div class="delete"></div>
      </li>
    `
    })
  }
  let seriesList = document.querySelector('.promo__interactive-list');





















