
//1-Sergilenecek ürünü yapılandıran sınıf
class Kitap{
    constructor(kitapAdi,kitapYazari,kitapISBN){
        this.kitapAdi=kitapAdi;
        this.kitapYazari=kitapYazari;
        this.kitapISBN=kitapISBN;
    }
}

//2-Ürünü sergileyecek reyonları,satıcıları,tezgahtarları,vitrini vs. tanımlayan sınıf ve içindeki metodlar
class Arayuz{
    kitapEkle(kitap){

        const tablo =document.getElementById("kitapListesi");

        const satir=document.createElement("tr");

        satir.innerHTML=`
        <td>${kitap.kitapAdi}</td>
        <td>${kitap.kitapYazari}ı</td>
        <td>${kitap.kitapISBN}</td>
        <td> <a href ="a" class="delete">X</td>
        `

        tablo.appendChild(satir);

    }

    kitapSil(){

    }

    kitapSay(){

    }

    mesajGoster(){

    }

    zamanAsimi(){

    }

    formuTemizle(){

    }

}

//3-Ekleme ve silme işlemlerini tetikleyecek olay tanımlayıcıları oluştur(form submit olayı-delete link click olayı)
document.getElementById("formKitap").addEventListener("submit",function(e){

    const kitapAdi=document.getElementById("txtKitapAdi").value,
          kitapYazari=document.getElementById("txtKitapYazari").value,
          kitapISBN=document.getElementById("txtKitapISBN").value;

    const kitap = new Kitap(kitapAdi,kitapYazari,kitapISBN);

    const islem = new Arayuz();

    if(kitapAdi !="" && kitapYazari !="" && kitapISBN !=""){
    islem.kitapEkle(kitap);
    document.getElementById("sonuc").innerHTML="Kitap Basariyla eklenmistir";
}

else{
    document.getElementById("sonuc").innerHTML="Bos kisimlar var kitap eklenemedi";
}

    e.preventDefault();
});







document.getElementById("kitapListesi").addEventListener("click",function(e){

    e.preventDefault();
});