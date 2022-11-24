// const pdegeri = document.querySelector('p'); //ilk d etiketini seçtim
// console.log(pdegeri.innerText);


// pdegeri.innerText = 'Ramazan';
// console.log(pdegeri.innerText);

const pdegeri= document.querySelectorAll('p');
pdegeri.forEach(a=>{
    console.log(a.innerText);
    a.innerText += ' yenialan';
})

const icerik = document.querySelector('.icerik');
console.log(icerik.innerText);