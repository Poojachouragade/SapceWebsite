let next8 = document.querySelector('.next8')
let prev8 = document.querySelector('.prev8')

next8.addEventListener('click',function(){
    let item45 = document.querySelectorAll('.item45')
    document.querySelector('.slide90').appendChild(item45[0])
})

prev8.addEventListener('click',function(){
    let item45 = document.querySelectorAll('.item45')
    document.querySelector('.slide90').prepend(item45[item45.length - 1])
})