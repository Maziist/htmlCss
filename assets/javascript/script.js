let popup = document.querySelector('#popup')
let info = document.querySelector('#contact')
let nationnality = document.querySelector('#nationnality')
let indicatif = document.querySelector("#indicatif")
let isenter = false

// info.addEventListener('mouseenter', ()=>{
//     popup.classList.remove('hidden')
// })

// popup.addEventListener('mouseenter', ()=>{
//     isenter = true
// })

// popup.addEventListener('mouseout', ()=>{
//     if (isenter) {
//         popup.classList.add('hidden')
//         isenter = false
//     }
// })

nationnality.addEventListener('change', ()=>{
    if (nationnality.value == "france") {
        indicatif.value = "+33"
  
    }else if(nationnality.value == "england"){
        indicatif.value = "+44"
    }else if(nationnality.value == "belgique"){
        indicatif.value = "+32"
    }else if(nationnality.value == "reunionisland"){
        indicatif.value = "+262"
    }

})


