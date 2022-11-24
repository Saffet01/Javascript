const button = document.querySelector('button');
const mainPopup = document.querySelector('.main-popup');
const popupClose = document.querySelector('.popup-close')


button.addEventListener('click', ()=>{
    mainPopup.style.display = 'block';
})

popupClose.addEventListener('click', () =>{
    mainPopup.style.display = 'none';
})

mainPopup.addEventListener('click', e =>{

    console.log(e.target);
    if(e.target.className === 'main-popup'){
        mainPopup.style.display = 'none';
    }
})
