
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

    kitapSil(target){

        if(target.className==="delete"){
            target.parentNode.parentNode.remove();
        }

        target.n

    }

    kitapSay(){
        // const tablo=document.getElementById("kitapListesi");
        const kayitsayisi= document.getElementsByTagName("tr").length-1;
        document.getElementById("sonuc2").innerHTML= "Sisteme Ekli olan Toplam Kitap Sayisi :  " + kayitsayisi;


    }

    mesajGoster(mesaj,className){

// ---------------------Birinci yol-----------------------

        const container=document.querySelector(".container");

        const form=document.querySelector("#formKitap");

        
        const mesajKutusu=document.createElement("div");

        mesajKutusu.className=`alert ${className}`;


        // mesajKutusu.appendChild(document.createTextNode(mesaj));
        mesajKutusu.innerHTML=mesaj;

        container.insertBefore(mesajKutusu,form);
    

        setTimeout(function(){
            document.querySelector(".alert").remove();
        },5000);

//  ---------------------------------------IKINCI YOL-------------------------

        // const h3=document.querySelector(".baslik2");
        
        // h3.className=`alert ${className}`;
        // h3.innerHTML=mesaj;

        // setTimeout(function(){
        //     document.querySelector(".alert").remove();
        // },5000);

    }



    formuTemizle(){
        document.getElementById("txtKitapAdi").value=""
        document.getElementById("txtKitapYazari").value=""
        document.getElementById("txtKitapISBN").value=""

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
    // document.getElementById("sonuc").innerHTML="Kitap Basariyla eklenmistir";

    islem.mesajGoster("Kitap başarıyla eklendi","success");

    islem.kitapSay();
}

else{
    // document.getElementById("sonuc").innerHTML="Bos kisimlar var kitap eklenemedi";
    islem.mesajGoster("Lütfen tüm alanları doldurunuz!","error");
}

    islem.formuTemizle();

    e.preventDefault();
});







document.getElementById("kitapListesi").addEventListener("click",function(e){

    const islem = new Arayuz();

    islem.kitapSil(e.target);

    islem.kitapSay();

    islem.mesajGoster("Kitap başarıyla silindi","success");

    e.preventDefault();
});