let text =document.getElementById('text');
let leftBuilding = document.getElementById('left-building');
let rightBuilding = document.getElementById('right-building')
window.addEventListener('scroll' ,()=> {
    let value = window.scrollY;
    console.log(value);

    text.style.marginTop = value * 1.5 + 'px';
    leftBuilding.style.left = value * -1.5 + 'px';
    rightBuilding.style.marginTop = value * 1.5 + 'px';
})