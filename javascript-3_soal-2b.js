//try and catch


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



//penggunaan try and catch untuk menghandle async dan await
//jadi fungsi dibuat asynchronous dulu dengan perintah async function

async function pengecekanHari(){
  try {
    let result = await cekHariKerja('minggu');  // terdapat keyword await dalam async untuk memberhentikan sementara eksekusi fungsinya
    console.log(result);                        // perintah tunggu untuk function cekHariKerja sampai promisesnya dieksekusi terlebih dahulu
  } catch(error) {                              // try mengconsole result
    console.log(error.message);                 // dimana result merupakan fungsi cekHariKerja yang di await 
  }                                       
}
pengecekanHari();

//perlu diperhatikan pada blok try{} , dideklarasikan variabel result untuk memasukkan fungsi async (cekHariKerja).
//karena cara kerja try tidak seperti then (auto invoke resolve pada promise). Pada try harus dimasukkan dulu promise nya.
//catch tidak perlu, karena (auto invoke reject) pada promise.