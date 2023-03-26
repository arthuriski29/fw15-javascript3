//dengan menggunakan map artinya memetakan setiap elemen array nya kedalam sebuah function sendiri
// artinya si masing masing array natu setelah di map ini adalah potongan dari masing2  elemen sebelumnya
// masing2 elemen suatu array > map > function([elemen1]), function([elemen2]), function([elemen3]), dst.
// dengan menggunakan reduce kita bisa menyatukan semua function yang telah di map tadi sehingga terdapat array dengan banyak elemen

//ilustrasi:
//1. Sediakan Array awal (arrayInitial). >>ilustrasi seperti bahan baku  [roti, timun, daging, wortel, dll.]
//2. Map sehingga masing2 bahan baku punya array sendiri [potongan2 roti, potongan2 timun, potongan2 daging, potongan2 wortel, dll.]
//3. reduce sehingga semua potongan tersebut disatukan, penyatuan diilustrasikan menjadi hamburger utuh [hamburger1, hamburger2, hamburger3, dll.]


const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    if (!error) {      // ! adlh logical operator NOT, artinya bukan error
      callback(null, month)
    } else {
      callback(new Error('Sorry Data Not Found'), [])
    }
  }, 4000)
};

//buat cb function untuk melanjutkan dan menampilkan smua bulan
//menggunakan method map

// contoh: getMonth(showMonth?)

const showMonth = (error, month) => {
  if (error) {
    console.log(error.message);
  } else {
    const allMonths = month.map()  // karena di soal map() digunakan hanya untuk menampilkan semua bulan tanpa mengubah setiap elemen 
    console.log(allMonths);                 // dalam bulan tersebut, maka cukup dengan memasukkan parameter function kosong ().
  }                                         
};
// // contoh mengubah tiap tiap elemen pada month
// function getMap(item) {
//   return 'Ini adalah bulan '+ item;
// }

getMonth(showMonth);