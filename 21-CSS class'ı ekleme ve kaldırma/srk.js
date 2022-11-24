const icerik = document.querySelector('p');

console.log(icerik.classList); //eklenmeden önce

icerik.classList.add('eklendi');
console.log(icerik.classList);//eklendikten sonra

icerik.classList.add('srk');
console.log(icerik.classList);


icerik.classList.remove('error');
console.log(icerik.classList);



const pdegeri = document.querySelectorAll('p');

pdegeri.forEach(a => {
    if(a.textContent.includes('error')){
        a.classList.add('error');
    }
    if(a.textContent.includes('success')){
        a.classList.add('success');
    }
});

console.log(pdegeri);