//buatlah sambungan program menggunakan :
//a. then catch
//b. try catch

//untuk mengecek hari kerja dari kode Asynchronous disamping
//dan jelaskan pada komentar fungsi then catch dan try catch tersebut


//new Promise adalah spesial object dari Javascript
//memproduksi value setelah sebuah operasi berjalan baik sukses ataupun tidak (error)
//jika sukses, akan menunjukkan resolve. jika error akan menunjukkan reject




const cekHariKerja = (day) => {                                         // pendeklarasian  function variabel  dengan parameter (day)
  return new Promise((resolve, reject) => {                             // yang akan mereturn new Promise function 
    setTimeout(() => {                                                  // yang menjalankan setTimeout function sebagai code dari Promise executor
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];    // dalam code setTimeout mendeklarasikan dataDay array
      let cek = dataDay.find((item) => {                                // serta deklarasi variabel cek yang berisi function untuk find(item)
        return item === day                                             // dimana fungsi find mereturn param item yang === param day 
      })
      if(cek){                                                          // kemudian function setTimeout menjalankan if.
        resolve(`${cek} adalah hari kerja`)                             // jika setTimeout menunjukkan cek, maka akan melakukan resolve(cek)
      }else {                                                           // jika tidak resolve maka akan direject 
        reject(new Error('Hari ini bukan hari kerja'))                  // jika reject maka ada sebuah variabel Error(string) yang dibuat sebagai object constructor
      }
    }, 3000)                                                            // fungsi set timeout dieksekusi dalam 3 detik
  })
}


//then and catch adalah untuk menghandle error handling pada Promise


//Resolved Case

cekHariKerja('senin').then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error.message); // dengan penambahan .message akan mengconsole hanya message pada reject
})                            // jika tidak menggunakan .message akan menampilkan errornya dimana

//penggunaan then otomatis merujuk pada resolve, jika function cekHariKerja() sesuai dengan Promise (fullfilled)
//sehinggga di dalam then() bisa dilakukan fungsi console yang menampilkan objek promise tersebut ketika resolved ke console
//output(resolved) : senin adalah hari kerja


// Reject Case

cekHariKerja('sabtu').then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error.message); // dengan penambahan .message akan mengconsole hanya message pada reject
})                            // jika tidak menggunakan .message akan menampilkan errornya dimana

//penggunaan then otomatis merujuk pada resolve, jika function cekHariKerja() sesuai dengan Promise (fullfilled)
//sehinggga di dalam then() bisa dilakukan fungsi console yang menampilkan objek promise tersebut ketika resolved ke console
//output(reject) : Hari ini bukan kerja


