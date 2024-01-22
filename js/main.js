var elTitle = document.querySelector('.title')
var num = prompt('raqam kiriting')
var b = 18

if(num > 18){
    elTitle.textContent = 'siz 18 yoshdan kattasiz'
}else if(num < 18){
    elTitle.textContent = 'siz 18 yoshdan kichiksiz'
}else if(num = 18){
    elTitle.textContent = 'siz 18 yoshdasiz'
}