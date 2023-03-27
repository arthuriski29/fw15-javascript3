//pengecekan async await dengan try ... catch
// contoh program untuk mengecek incorrect input password
// resolved : correct
// reject : incorrect

//incorrect jika tidak memenuhhi : 
//            index harus 8-16 karakter
//            salah satu index harus ada huruf
//            salah satu index harus ada angka
//            salah satu index harus huruf besar


function checkPassword(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const stringInput = String(input);    //mendeklarasikan variabel stringInput yang membuat param input menjadi string
      
      //pendeklarasian awal masing2 kondisi dengan boolean false dulu
      let hasUppercase = false;         
      let hasLowercase = false;
      let hasDigit = false;
      
      //melakukan pengecekan per index dengan looping dan metode .charAt(i)
      //.charAt(i) : mengakses tiap index (character) dalam string
      for (let i = 0; i < stringInput.length; i++) {  
        const char = stringInput.charAt(i);  
      // masing2 index disimpan dalam const char
        

      // kondisional hanya untuk mengupdate value hasUpperCase, hasLowerCase, dan hasDigit
        if (char >= 'A' && char <= 'Z') {
          hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
          hasLowercase = true;
        } else if (char >= '0' && char <= '9') {
          hasDigit = true;
        }
      }
      
      // if selanjutnya setelah ketiga variabel diatas diupdate
      // mengecek kondisi reject jika salah satu syarat tersebut true(artinya reject dicapai), jika false artinya resolved
      if (stringInput.length < 8 || stringInput.length > 16 || !hasUppercase || !hasLowercase || !hasDigit) {
        reject(new Error('Password yang anda masukkan salah !'));
      } else {
        resolve('Password berhasil disimpan !');
      }
    }, 3000);
  });
}

async function Password() {
  try {
    let result = await checkPassword('Abcdefghij12');
    console.log(result);
  } catch (error) {
    console.log(error.message);    
  }
}

Password();


