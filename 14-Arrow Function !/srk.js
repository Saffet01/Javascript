
// const kareAlani = (kenar) => { parametre tekse parantezsiz yazılabilir
//     return kenar**2; return tek satırsa bu şekilde, alttaki gibi yazılabilir
// }

// yukarıdaki fonksiyon tanımlamasıyla alttaki aynı.

const kareAlani = kenar => kenar**2;
var sonuc = kareAlani(4);
console.log(sonuc);

const yazdir = () => console.log("saffet");
yazdir();


const fatura = function(urunler, vergi){
    let toplam = 0;
    for(let i=0; i < urunler.lenght; i++){
        toplam += urunler[i] + urunler[i] * vergi;

    }
    return toplam;    
}

console.log(fatura([10,20,30],0.25));