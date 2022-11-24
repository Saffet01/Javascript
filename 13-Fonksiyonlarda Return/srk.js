
const kareAlani=function(kenar){
    let alan=kenar**2;
    // console.log(alan);
    return alan;
}

//kareAlani(6);



// console.log(alan);  çalışmaz çünkü;
// burada alanı fonksiyonun dışarısında kullanamadık hata verdi

// Bunu dışarıda da kullanmak istiyorsak (global) return ile yazmak gerekir.!

const sonuc = kareAlani(6);
console.log(sonuc);
