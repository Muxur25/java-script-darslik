"use strict"  // bu qatiy rejim yani javascriptdan eski kidlarni olib tashidi



// let number = 10;
// const borderColor = "red";
//
//
// number = 20;
// console.log(number);
// console.log ("salom dunyoo");
// var salom = ("hammaga salom")
// console.log (salom)

// console.log(ism)
//
// var ism = ("salom")

//
// number = 15;
// console.log(number)


// let number = 15; // raqam number
// console.log(8/0); // infinity cheksiz
//
// console.log("Muxriddin" * 8); // NaN yani son emas




// const ism = "Muxriddin" // string matn



// const yer = true; bolean malumot turi true yoki false boladi

// console.log(clentism); null yani mavjud emas
//
// let age;
// console.log(age) // ozgaruvchi bor lekin qiymat yoq undefined

// const muxriddin = {     object
//     yosh:30,
//     familiya:"Umarov",
//     uylangan:false,
// };
//
// console.log(muxriddin.familiya) tafsiya qilinadi
// console.log(muxriddin["uylangan"])


// const ismlar = ["Muxriddin", "Sardor", 16,]; // array
// console.log(ismlar[0])



// 5 - dars
// alert("Salom dunyo")
// const san = confirm("San shottamisan"); foydalanuvchidan 2 ta qiymat qabul qiladi true yoki false va sanga joyliydi
// console.log(san);

// const ism = prompt("Ismingiz nima", "Samara"); foydalanuvchidan sorash samara bu taxminiy ism
// console.log(typeof(ism))  typeof bu turini aniqlidi yani stringmi numbermi

// Foydalanuvchidan kelgan xabar doim string korinishda boladi

// const yoshi = prompt("Yoshingiz?", "18"); //prompt oldiga + qoysa number malumot turiga aylanadi
// // console.log(typeof (yoshi));
// console.log(yoshi +10); // 1810 chatishib qoshilib ketadi

// let ranglar = []; // bosh massiv
// // ranglar[0] = "qizil"; // malumot qoshish
// // console.log(ranglar)
// ranglar[0] = prompt("Yaxshi ko'rgan rangingiz #1", "");
// ranglar[1] = prompt("Yaxshi ko'rgan rangingiz #2", "");
// ranglar[2] = prompt("Yaxshi ko'rgan rangingiz #3", "");
//
// console.log(ranglar)



// 6 interpolitsiya

// const yutub = prompt("Yutub kanalingizni kiriting", "");
// // console.log("https://youtube.com/" + yutub + "/videos");
//
// console.log(`https://youtube.com/${yutub}`) // interpolatsiya


// var ism = "Muxriddin";
// let ish = "Suniy intelekt";
// console.log(`Mening ismim ${ism}, mening ishim ${ish} bilan bog'liq`);
//
// web storm ichiga hech qanaqa promt va alert beromimiz


// console.log("salom dunyo");

// console.log("Muxriddin" + "Umarov");
// console.log(7 + +"5")

// let incr = 25;
// let decr = 25;
//
// incr++;  1 sonini qoshadi
// decr--;   1 sonini ayiradi
// console.log(incr);
// console.log(decr);

//
// let son1 = 10;
// let son2 = 10;
// son1++;
// son2--;
// console.log(son1);
// console.log(son2);

//
// var son1 = 10;
// var son2 = 12;

// console.log(son1++); birni qoshadi va natijasi shundan keyin paydo boladi
// console.log(son2--); birni ayiradi va natijasi shundan keyin paydo boladi
//
// console.log(son1++);
// console.log(son2--);
//
// console.log(son1);
// console.log(son2);

// console.log(++son1); natijasini hozirdan korsatadi yani bir qoshadi
// console.log(--son2);   bir ayiradi va ekranga ciqaradi


// console.log(5%2); qoldiq nechi


// console.log(5*5 == 25); 5 * 5   25 mi true yoki false qaytaradi
//
// console.log(5*5 == "25");  == malumot turiga qaramaydi va ozini qiymatiga qaraydi bundaham true qaytaradi
//
// console.log(5*5 === "25"); === bu endi malumot turiga qaraydi va false qaytaradi



// const yoshi = true;
// const sayt = false;
//
// console.log(yoshi && sayt);  bu belgi iktasiham(yoki hammasi) true bolsagina true qaytaradi
//
// console.log(yoshi || sayt);  bu belgi faqatgina ichida bittagina true bolsa kifoya true qaytaradi

// let salom = true;
//
// console.log(!salom)  bu belgi ozgartirib  beradi yani true bolsa false yoki nabarot


//// Amaliyot /////

// let numberofseries = prompt("Nechta serial ko'rdingiz?", "");
//
// let seriesDB = {
//      count: numberofseries,
//      series: {},
//      actors: {},
//      genres: [],
//      privat: false,
//  };

// console.log(seriesDB)


// let savol1 = prompt("Oxirgi ko'rgan serialingiz?", "");
// let savol2 = prompt("Nechi baxo berasiz");
//
//
// let savol3 = prompt("Oxirgi ko'rgan serialingiz?", "");
// let savol4 = prompt("Nechi baxo berasiz");
//
// let baxolar = {}
//
// baxolar[savol1] = savol2;  shunday obyekt qoshiladi objectga
// baxolar[savol3] = savol4;
//
// console.log(baxolar);


// let odam = {
//     ism: "Muxriddin",
//
// };
//
// const age = "Yoshi",
//     nechi = 30;  // obyektni shunday yaratish ham mumkin quyidagi tartibda
//
// odam[age] = nechi;  va biz dinamik tarzda qoshamiz
//
// console.log(odam);





///Shartli operatorlar




// let age = +prompt("Nechi yoshsiz?", "");

// if (age>18) {
//     console.log("Welcome");
// }   else {
//     console.log("No entry");
// }

// if (age>25) {
//     console.log("Horror films");
// } else if (age>18 && age<25) {
//     console.log("Detectiv films");
// } else {
//     console.log("Multmilms");
// }

// age>25 ? console.log("Horror fils"): console.log("Multimania");  bir qatorga yozish

// var rang = "sjdhd";
//
//
// switch (rang) {
//     case "qizil": // Agar qizil bolsa buniki chiqadi faqat bu katta kichik bn ishlamaydi
//         console.log("Olg'a");
//         break;  // Toxtatadi
//     case "yashil":
//         console.log("Toxlab tur"); // faqat switch case qatiy rejimda ishlaydi yani ===
//         break;
//     case "sariq":
//         console.log("Qisib tur");
//         break;
//     default:
//         console.log("Yurma kut");
//         break;
//
//
// }








/// Sikl .

// var son = 1;


//  1 usul
// while (son<20) {
//     console.log(son);
//     son++;
// };
//

// 2 usul
//
// do {
//     console.log(son);
//     son++;
// } while (son<30);


// 3 usul

// var son = 10;


// for (var i = 1; i<=8; i++) { // yangi ozgaruvchi yarattik va shu amal bajarguncha
//     console.log(i); // shuni korsat didik
// };

// for (var b = 1; b<20; b++) { shu sikl falseni qaytarguncha
//     console.log(son)   shular bajariladi
//     son++
// }

// for (var son = 1; son<20; son++){
//     if (son === 10){ /// 10 ga yetganda siklni tixtatamiz
//         break
//     }
//     console.log(son)
// }

// for (var son = 1; son<20; son++){
//     if (son === 10){
//         continue // 10 ni tashab ket dimiza
//     }
//     console.log(son);
// }







//// Amaliyot


// let seriallar = {};
//
// for (var serial = 1; serial<3; serial++) {
//     var oxirgi = prompt("Oxirgi korgan serialingiz?", "");
//     var baxo = +prompt("Nechi baxo berasiz?", "");
//     seriallar[oxirgi] = baxo;
//
//
// }
//
// console.log(seriallar);


// var son = 1;
//
// while (son<3){
//     var oxirgi = prompt("Oxirgi korgan serialingiz?", "");
//     var baxo = +prompt("Nechi baxo berasiz?", "");
//     if (oxirgi && baxo) {
//         seriallar[oxirgi] = baxo;
//         son++
//     } else {
//         continue;
//     };
//
// };
// console.log(seriallar);


// let seriallar = +prompt("Nechta serial ko'rgansiz?");
//
// if (seriallar<5) {
//     console.log("Kam serial ko'ribsiz");
// } else if (seriallar<10) {
//     console.log("Yaxshi normal");
// } else {
//     console.log("Siz zvezda ekansiz");
// }
//
// script.js



// Javoblari
// 'use strict'
//
// const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '')
//
// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
// }
//
// for (let i = 0; i < 2; i++) {
//     const a = prompt("Oxirgi ko'rgan serialingiz?"),
//         b = prompt('Nechi baxo berasiz?')
//
//     if (a != null && b != null && a != '' && b != '') {
//         seriesDB.series[a] = b
//         console.log('done')
//     } else {
//         console.log('error')
//         i--
//     }
// }
//
// if (seriesDB.count < 5) {
//     console.log('Kam serial ko’ripsiz')
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//     console.log('Siz classik tamoshabin ekansiz')
// } else if (seriesDB.count >= 10) {
//     console.log('Siz serialchi zvezda ekansiz')
// } else {
//     console.log('Error')
// }
//
// console.log(seriesDB)


// console.log("Salom");
//
// function salomdunyo() { // funksiya shunday yaratiladi () ichiga parametr beriladi
//     console.log("Salom dunyo");
// }
//
// salomdunyo()

// Birinchi misol parametrga
// function salom(ism) {
//     console.log(ism)
// }
//
// salom("Salom Xon")



// Ikkinchi misol parametrga

//
// function calc(a, b) {
//     console.log(a + b);
// }
//
// calc(5, 6);
//
// calc(15,30);



// Uchimchi misol ketma ketlikka amal qilish
//
// function ismSalom(ism,familiya) {
//     console.log(`Mening ismim ${ism} va Familiyam ${familiya}`);
//     let age = 30; // local veriable sanaladi va faqat bu funksiya ichida ishlidi
// }
//
// ismSalom("Muxriddin","Umarov"); // Ketma - ketlikka amal qilish kere
//
// ismSalom("Mexringiz", "Salomov");


// return haqida

// function calc(a, b ){
//     return a+b; // funksiyani toxtatadi va qiymat qaytaradi
// }
//
// // console.log(calc(18,4));
//
// // Funksiyadan qaytgan qiymatni ozgaruvciga yuklash
//
//
// let aniqQiymat = calc(15,14);
//
// console.log(aniqQiymat)


// Funcsion Declaratsion bu degani funksiya yaratilgandan song uni oldin ham ishlatsak boladi
// Va biz korgan funksiya shularga misol

// let aniqQiymat = calc(15,14);
//
// console.log(aniqQiymat);
//
// function calc(a, b ) {
//     return a + b;
// }
///////////////////////////



// Funksion Expression buni lekin oldin chaqira olmimiz

// let salom = function (){
//     console.log("Hello world");
// }
//
// salom()



//////////////////////


// arrow funcsion bir qatorda va avtomat return paydo boladi
//
// const calc = (a,b) => a+b;
//
// console.log(calc(15,30))
//
//
// let salom = (ism,familiya) =>{
//     return `Salom ${ism} ${familiya}`
// }
// console.log(salom("Muxriddin","Umarov"))

///////////////////

// Metod va xususiyatlar

// var ism = "Muxriddin"
// var raqam = [1,2,3,4,5,6,7,8,9]


// console.log(ism.length) // uzunligi 9 qaytaradi

// console.log(raqam.length);

//
// console.log(ism[2]); // 3-harfni qaytaradi
// console.log(raqam[5]); // 6- raqamni qaytaradi


//console.log(ism.toUpperCase()) hamma harfni katta harf qiladi hohlasak buni ozgaruvchiga
// yuklashimiz ham mumkin
//console.log(ism.toLowerCase()) kichik harf qiladi hammasini
//
// let katta = ism.toUpperCase()
//
// console.log(katta)


// console.log(ism.indexOf("i")) // nechinchi orinda turganini korsatadi ikta harf bolsa birinchisini
// // yoq so'z bo'lsa -1 yani false


// let soz = "hello world";

// // console.log(soz.slice(0,5)) // Kesub beradi indeks kerak agar bitta qiymat berilsa osha qiymatdan oxirigacha

// // //kesadi

// //console.log(soz.substring(5)) // slice bilan bir xil faqat - son qabul qilmaydi

// console.log(soz.substr(5,6)); // bu yam shulaga oxshidi faqat 2 qiymati uzunlik lengs

// const son = 5.5;

// console.log(Math.round(son)); // Yaxlitlab beradi



// var son2 = "15.7px";

// console.log(parseInt(son2)); // Shunga oxshagan son qidiradi va eng kichigini tanlab oladi mal turini songa ozgartiradi


// console.log(parseFloat(son2)); // Shunga oxshagan faqat hamma sonni ajratib oladi




// 'use strict'
//
// let numberOfSeries; // Global ozgaruvchi yaratamiza
//
//
//
// function yangi(){
//     numberOfSeries = +prompt("Nechta serial ko'rdingiz?", ''); // va unga yuklaymiz malumot
//     while (numberOfSeries=="" || numberOfSeries==null || isNaN(numberOfSeries)){
//         numberOfSeries = +prompt("Nechta serial ko'rdingiz?", '');
//     }
//
// }
// yangi()
//
//
//
// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
// }
//
//
// function tekshirish(){
//     if (seriesDB.private == false){
//         console.log(seriesDB)
//     } else {
//         console.log("Xatoo")
//     }
// }
// tekshirish()
//
//
//
//
//
//
//
// function baxo(){
//     for (let i = 0; i < 2; i++) {
//         const a = prompt("Oxirgi ko'rgan serialingiz?"),
//             b = prompt('Nechi baxo berasiz?')
//
//         if (a != null && b != null && a != '' && b != '') {
//             seriesDB.series[a] = b
//             console.log('done')
//         } else {
//             console.log('error')
//             i--
//         }
//     }
//
// }
// baxo()
//
//
// function tomosha(){
//     if (seriesDB.count < 5) {
//         console.log('Kam serial ko’ripsiz')
//     } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//         console.log('Siz classik tamoshabin ekansiz')
//     } else if (seriesDB.count >= 10) {
//         console.log('Siz serialchi zvezda ekansiz')
//     } else {
//         console.log('Error')
//     }
//
//     console.log(seriesDB)
// }
//
//
//
//
// function janr(){
//     let son = 0;
//     while (son<3){
//         let sorash = prompt(`Yaxshi korgan janringiz #${son+1}`);
//         seriesDB.genres[son] = sorash;
//         son++
//     }
// }
//
//
// janr()
//
//
// tomosha()





/// Calback
// Agar funksiyamiz uzun bolsa u serverdan kelishga kechikadi va 1 chi kelishni orniga
// ikkinchi keladi misl ucun

// function salom(){
//     //code
//     setTimeout(() =>{
//         console.log(1);
//     },1000);
// }
//
// function raqam2(){
//     console.log(2)
// }
//
//
// salom() // bu xolda birinchi 2 keyin 1 chiqadi chunki 1 da kotta yuklama bor
// raqam2() // uni uchun nima qilamiz


// function salom(sal){
//     //code
//     setTimeout(() =>{
//         console.log(1); // birinchi buni ciqar
//         sal()  // keyingina buni
//     },1000);
// }
//
// function raqam2(){
//     console.log(2)
// }
//
// salom(raqam2) // ichiga undan keyin qaysi funksiya ciqish kerakligini yozamiz


// function salom2(){
//     console.log("Men ikkinchi bolib salomlashaman");
// }
//
// function salom1(sal2){
//     console.log("Men birinchi")
//     sal2()
// }
//
// salom1(salom2)



/////// Obyektlar haqida chuqurroq
// "use strict"
// let ogri = {
//     kiyim:"Jiket",
//     boyi:1.7,
//     rangi:{
//         rang:"sariq",
//         soch_rang:"qora",
//     },
//     nims: function (){  // objectga yangi metod qoshdik
//         console.log("Eshik yordamida");
//     },
//
//
// };

// ogri.nims(); // shunday caqiramiza obyekt icidagi funksiyani bu metod deyiladi


//delete ogri.kiyim; // 1. Ochiradigan operator

//console.log(Object.keys(ogri)); kalit sozlarni massivga olib beradi


// for (let i in ogri){ // ogridagi kalit sozlarni i ga yuklaydi
//     console.log(`Belgisi ${i}, Xususiyati: ${ogri[i]}`);
// }

//hmm agar obyekt ichida obyektni qanday ciqaraman pastdagi aynan shunga mos

// for (let i in ogri){
//     if (typeof ogri[i] ==="object"){
//         for (let n in ogri[i]){
//         console.log(`Belgisi:${n}, Hususiyati: ${ogri[i][n]}`)}
//     } else {
//         console.log(`Belgisi ${i}, Xususiyati: ${ogri[i]}`);
//     }
// }

/// Obyekt valuelarini ozgaruvchilarga oson joylash desturvazizasiya

// const {rang, soch_rang} = ogri.rangi // shunday osongina ozgaruvchiga joylimiza
//
// console.log(rang)
// console.log(soch_rang)



// Array
//
// let numbers = [1,2,3,4,5,6,7,8,9,0];

// console.log(numbers.length)


//
// numbers.pop() // oxiridan bitta ketti
//
// numbers.push(17); // element qoshadi
//
// numbers.shift() // birinchi elementni ob tashidi uncha ishlatilinmaydi
// numbers.unshift(99); // boshiga element qoshadi uncha ishlatilinmaydi
//
//
// console.log(numbers)


// for (let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// for (let i of numbers){ // arraylar bilan of object bn in ishlatilinadi
//     console.log(i)
// }


// length funksiyasi hammasini sanab otirmidi u shunchaki oxirgi element indeksiga 1 ni qoshib
//
// numbers[30] = 55;
// console.log(numbers.length) mana yaqqol misol
//
//
//

// numbers.forEach(function(value, index, numbers){ bu for va while ga oxshidi
//     console.log(`Indeksi:${index}, Element:${value}, Arraydan:${numbers}`);
// })


// let sorash = prompt('Yaxshi korgan kinolariz?');
//
// let kino = sorash.split(", "); // bu funksiya foydalanuvchidan matnlar qabul qi
// //qiladi va uni array korinishda saqlaydi foydalanuvchi quyidagicha kiritish kere salom, qalay, os
// console.log(kino)

// let ismlar = ['muxur', 'aziz', 'baxrom', 'alima'];
//
//
// ismlar.sort(); // alfavit ketma ketligida
// console.log(ismlar)




////   Clonlash




// let x =10
// let y = x
//
// y = y + 5
//
// console.log(x)  clonlash faqat bu usul array va massivga otmaydi yani shunchaki silkasini
// console.log(y)   bergan bolamiza mana misol tagida

// let salom = {
//     ism: "Muxriddin",
//     familiya: "Umarov",
// }
//
// let qalay = salom
//
// qalay.ism = "Ulug'bek"
//
// console.log(salom)
// console.log(qalay)




// function nusxaObj(obj) { // Nusxa oladigan funksiya yaratamiz
//     let obs = {} // !!!!!!! Bu object icida objrct yokida object icida array bosa otmidi
//
//     for (let key in obj){
//         obs[key] = obj[key]
//
//
//     }
//     return obs
// }
//
//
//
// let raqaml = {
//     nomer: 1,
//     nomer2: 2,
// }
//
// let raqamKlon = nusxaObj(raqaml) // nusxa olamiza
//
// raqamKlon.nomer = 15
//
// console.log(raqaml)
// console.log(raqamKlon)




// let raqamlar = {
//     x:1,
//     y:2,
//     c:{
//         d:5,
//         k:10,
//     },
// };
//
// let raqamlar2 = Object.assign({}, raqamlar); // obyekt icida obyekt bosa yo array bosa
//                                             // shunday ozgartiramiza
// raqamlar2.x = 25;
//
//
// console.log(raqamlar);
// console.log(raqamlar2)

//
// let raqam1 = {
//     x:1,
//     y:2,
// };
//
// let raqam2 = {
//     c:5,
//     d:15,
// };
//
//
// let birlashtitish = Object.assign(raqam1, raqam2); // raqam1 obyektga raqam2 obyektni qosh
//
//
// console.log(birlashtitish)






//massivlarni klonlash
// 2 xil usuli bor birinchi funksiya yozib ikkinchisi bu slice orqali

// const raq  = [1, 2, 3];
//
// let raqam = raq.slice() // ichiga boshlanish va oxirgi indexlarni berishimiza mmkin
//
// raqam[2] = 'muxur';
//
// console.log(raq);
// console.log(raqam)

// Spreat operatori (Aylantirish) ...  ikki massivni birlashtirish

// let liverpool = ['salah', 'mane'];
//
// let chelse = ['messi']
//
// let umumiy = [...liverpool, ...chelse]
//
// console.log(umumiy)




// function hisob(x, y, z){
//     console.log(x + y+ z);
//
// };
//
// hisob(5,6,7)


//lekin bizga serverdan malumotlarimiz bazida massiv object korinishida keladi va bu holda
// bizzi funksiyamiz ishlamaydi ishlashi ucn biz ui moslashtirishimiza kere



// function hisob(x, y, z){
//     console.log(x + y+ z);
//
// };
//
// let server = [15, 15, 7];
//
// hisob(...server) // shunday aylantiramiza bunda ozi avtomatik tushadi



// let raqam = {
//     x: 5,
//     y: 6,
// };
//
// let newRaqam = {...raqam};
//
// console.log(raqam)
// console.log(newRaqam)


// OOP asoslari

let car = { // Bu umumiy ota class
    model: "BMW",
    motor: "turbo",
    airbac: true,
}

let gm = {
    airbac: false,
}

//gm.__proto__ = car; //  asosi car boladi va cardagi hamma hususiyat va metotlarini meros qiladi
// tavfsiya qilinmaydi eski usul unutvoringizlar😂

// Object.setPrototypeOf(gm, car); // bu usul yangi va tavfsiya qilinadi
// console.log(gm);

// let merosQoldiradi = Object.create(car);
//
// console.log(merosQoldiradi)





/// Amaliyot /////


// 'use strict'
//
//
//
//
//
// const seriesDB = {
//     count: 0,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
//     startM: function () {
//         seriesDB.count = +prompt("Nechta serial ko'rdingiz?", '')
//
//         while (
//             seriesDB.count == '' ||
//             seriesDB.count == null ||
//             isNaN(seriesDB.count)
//             ) {
//             seriesDB.count = +prompt("Nechta serial ko'rdingiz?", '')
//         }
//     },
//
//
//     rememberMySeries: function (){
//         for (let i = 0; i < 2; i++) {
//             const a = prompt("Oxirgi ko'rgan serialingiz?"),
//                 b = prompt('Nechi baxo berasiz?')
//
//             if (a != null && b != null && a != '' && b != '') {
//                 seriesDB.series[a] = b
//                 console.log('done')
//             } else {
//                 console.log('error')
//                 i--
//             }
//         }
//     },
//
//
//
//
//     detectLevelSeries: function (){
//         if (seriesDB.count < 5) {
//             console.log('Kam serial ko’ripsiz')
//         } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//             console.log('Siz classik tamoshabin ekansiz')
//         } else if (seriesDB.count >= 10) {
//             console.log('Siz serialchi zvezda ekansiz')
//         } else {
//             console.log('Error')
//         }
//     },
//
//     showDb: function (hidden){
//         if (!hidden) {
//             console.log(seriesDB)
//         }
//     },
//
//     writeGenres: function (){
//         for (let i = 0; i < 5; i++) {
//             const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}`, '')
//             if (genre == '' || genre == null){
//                 i--
//                 console.log("Xato")
//             }else {
//                 seriesDB.genres[i] = genre
//             }
//
//         }
//         seriesDB.genres.forEach(function (value, salo){
//             console.log(`Element: ${salo+1}, nomi: ${value}`)
//         })
//     },
//
//
//     visibleDB: function (){
//         if (seriesDB.private){
//             seriesDB.private = false;
//
//         }else if (!seriesDB.private){
//             seriesDB.private = true;
//         }
//     },
//
// }
//
// seriesDB.writeGenres()
// console.log(seriesDB)



// Dynamic typing


//1
// let raqam = 5;
//
// console.log(typeof(String(raqam)));
//
// //2
// console.log(typeof("Muxriddin" +raqam));

// to number

//1
// let numberr = "5";
//
// console.log(typeof(Number(numberr)))
//
// //2
//
// console.log(typeof(+numberr))
//
// //3
// console.log(typeof(parseInt(numberr)))


// 0,  "",  null,  Nan,  underfaled,  == Xar doim false qaytaradi

//
// let bolen = "5"
// //1
// console.log(typeof(Boolean(bolen)))
//
// //2
// console.log(typeof((!!bolen)))






// biza web saytni yuklayotganimizada birinchi orinda htmlni keyin bodyni yuklaydi
// biza script tagimizni har doim bodyni eng oxiriga qoyishimiza kerak
// yoq unaqa qimayman head ichiga yoki bodyni boshiga qoyaman desangiz
//<script defer src="script.js"></script> // ni ishlatamiza



// misol ucun bizda 2 ta script fayl bor
// 1 chisi 100 kb 2 chisi 5 kb
// agar biza
//<script async src='script.js'></script> ni ishlatsak birinchi 5 kb yuklaydi keyin 1 chisini




// agar script fayl ichida yana bitta script faylni dinamik tarzda qoshmoqchi bolsak

// const script = document.createElement('script')
// script.src = 'js/script.js'
// document.body.append(script)

// yoki universal funksiya yordamida


function univer(src){
    const script = document.createElement('script')
    script.src = src
    document.body.append(script)
}


univer('js/script.js')





