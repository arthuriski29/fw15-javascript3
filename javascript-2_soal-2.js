//10 method built-in function bawaan Javascript:

//1  .includes()
// Pada string 
// adalah metode untuk mencocokan string yang berada dalam variabel yang kita cari
// contoh :

var string1 = 'Komputer yang selalu diam';
let hasil = string1.includes('lal');
console.log(hasil); // output adalah true, karena terdapat 'lal' di dalam string1

// Pada array
// metode untuk dapat mencocokkan string pada seluruh elemen dalam array, sesuay dengan value yang diinputkan dalam includes()nya
// contoh :

var array1 = ['Robert', 'Bartolomeu', 'Cristopher', 'Pablo', 'Montesquieu']
let periksa = array1.includes('eu');
console.log(periksa); // output false, karena tidak dapat mendeteksi langsung 'eu' dalam array

//berikut agar dapat berfungsi pada string nya yang dipanggil :

let periksa1 = array1[1].includes('eu'); //spesifik hanya pada index[1] dari array
console.log(periksa1);

//2. charAt()
// Adalah metode built in untuk mengakses setiap character index pada sebuah string
// metode ini hanya bekerja pada string
const kata = 'Pagi'
const ambilIndex = kata.charAt(0)
//output : P

//3. .map()
// method built in untuk membuat array baru dari suatu array
// dimana map ini bisa dijalankan fungsi di dalamnya untuk memanipulasi array lama
// untuk ditampikan resultnya pada array baru
const sebuahWord = [{
       "id": 1,
       "nama": "Adi",
       "kerja": "Pengusaha",
       "no telp": 1234,
},
{
       "id": 2,
       "nama": "Rio",
       "kerja": "Petani",
       "no telp": 2345,

}]

const ambilMap = sebuahWord.map(ambil => ambil.nama)
console.log(ambilMap) // output ["Rio","Adi"]

//4. .find()
// untuk menemukan suatu string pada array
// penggunaannya hanya mendeteksi string pertama ditemukan yang sesuai
// jika ada banyak, maka yang pertama dideteksi, yang lain diabaikan
// mengharuskan fungsi
const penemu = ['Einstein', 'Newton', 'Galileo', 'Tesla'];
const ambilFind = penemu.find((temu) => temu[2])
console.log(ambilFind); // output 'Galileo'

//5. .push()
//  menambahkan elemen baru pada array, dan meletakkan pada akhir array
// karena item yang bertambah, push juga menambahkan panjang index pada array
//
const buahBuahan = ['apel, mangga, jeruk, pisang'];
buahBuahan.push('jambu', 'semangka');
console.log(buahBuahan);
  //output [ 'apel, mangga, jeruk, pisang', 'jambu', 'semangka' ]

//6. .sort()
// mengurutkan setiap elemen array sehingga mereturn array yang terurut
const tukangUrut = [12, 45, 77, 23, 35, 87, 11, 76, 8];
const masterUrut = tukangUrut.sort(function(a, b) {
       return a - b;
})
  console.log(masterUrut); // output [8, 11, 12, 23, 35, 45, 76, 77, 87]
    
//7. .toUpperCase()
// mengubah string menjadi huruf besar
const berbesarHati = 'kebesaran';
const jadiBesar = berbesarHati.toUpperCase();
console.log(jadiBesar); // output KEBESARAN

//8. .toLowerCase()
// mengubah string menjadi huruf kecil
const berkecilHati = 'KEKECILAN';
const jadiKecil = berkecilHati.toLowerCase();
console.log(jadiKecil); // output kekecilan

//9. toString()
// menjadikan array ataupun number , jadi String
const menyentring = [345, 332, 212];
const kesetring = menyentring.toString();
console.log(kesetring);            // output 345, 332, 212
console.log(typeof kesetring);     // output string

// 10. .filter()
// menyaring array dengan ketentuan tertentu yang ditentukan dalam fungsi nya
const penyaringan = [12, 45, 77, 23, 35, 87, 11, 76, 8]
const tersaring = penyaringan.filter((value) => {
       return value >= 20 && value <= 60;
})
console.log(tersaring)  //output [ 45, 23, 35 ]



