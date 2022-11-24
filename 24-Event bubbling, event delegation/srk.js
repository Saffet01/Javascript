const button = document.querySelector('button');

button.addEventListener('click',()=>{
    console.log("Saffet Ramazan");
})

const liElemanlari=document.querySelectorAll('li');

// liElemanlari.forEach(eleman =>{
//     eleman.addEventListener('click',e=>{
//         console.log(e);
//         console.log(e.target);
//         console.log('li tıklandı');
//         e.target.style.color = 'blue';
//     })
// })

const ul = document.querySelector('ul');
//ul.remove();
ul.addEventListener('click', e=>{
    // console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
})

// liElemanlari.forEach(eleman => {
//     eleman.addEventListener('click', e=>{
//         e.target.remove();
//     })
// })

button.addEventListener('click',() =>{
    const li=document.createElement('li');
    li.textContent='Javascript';
    ul.prepend(li); // en alta ekler, başa eklemek istersen prepend kullan
})