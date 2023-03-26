// Synchronous dieksekusi secara sequential (berurutan). Setiap line pada kode
// menunggu line sebelumnya selesai dieksekusi.

// Asynchronous artinya eksekusi setiap line dilakukan bersamaan.
// Ini sangat berguna untuk mengekstrak data dari database.
// javascript secara default mengekseekusi kode secara synchronous
// namun ada beberapa kode yang dikerjakan secara asynchronous : event, timer, request ajax, listener, interaksi user, dll.

//contoh untuk set timeout yang menampilkan fungsi yang dilkaukan berdasarkan waktu tertentu

setTimeout(() => {
  console.log('Akan tertulis dalam 1 detik')
}, 1000);
setTimeout(() => {
  console.log('Akan tertulis dalam 2 detik')
}, 1000);
setTimeout(() => {
  console.log('Akan tertulis dalam 3 detik')
}, 1000);

// jika di run ketiga fungsi setTimeout tersebut akan berjalan dalam satu waktu
//artinya dalam sedetik setelah dieksekusi, pengeksekusian akan akan berjalan
// fungsi ini tanpa callback maka dia berjalan synchronous



//nested settimeout
setTimeout(() => {
  console.log('3');
  setTimeout(() => {
    console.log('2');
    setTimeout(() => {
      console.log('1');
    }, 1000);
  }, 1000);
}, 1000);

//disini terdapat fungsi callback untuk memanggil fungsi dalam setTimeout berkali kali
//fungsi pertama meng console perintah '3' dalam 1 detik, kemudian didalamnya
//terdapat fungsi lain console perintah '2' dalam 1 detik berikutnya, kemudian
//terdapat fungsi lain untuk mengconsole perintah '1' dalam 1 detik berikutnya lagi

//ini adalah salah satu cara membuat fungsi seolah seperti synchronous dengan penerapan callback
// tapi cara dengan rentetan callback seperti ini menimbulkan (callback-hell). dimana cenderung error-prone (rawan error).
// jadi salah satu cara untuk mengatasinya adalah dengan menggunakan async atau Promise function. 


//source : freecodecamp, mdn developer.mozilla, fazztrack slides modified by user


//note beri contoh operasi sync maupun async