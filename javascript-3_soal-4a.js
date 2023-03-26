//contoh promise function
//untuk mengkali 2 buah angka
// kondisi resolve jika yang diinput keduanya angka
// kondisi reject jika salah satu atau keduanya bukan angka

function multiply(a, b){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject(new Error('Semua parameter input harus merupakan Number !')); 
      } else { //semuanya number
        const result = a * b
        resolve(result)
      }
    }, 4000)
  })
}

multiply(3, true).then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error.message);
})