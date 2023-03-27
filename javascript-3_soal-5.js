  //fetch adl sebuah api pada javascript untuk mengambil data secara asynchronous pada data eksternal


  fetch('https://jsonplaceholder.typicode.com/users')   // fetch API dari url
  .then(response => response.json())                    // .then memproses response menjadi json format
  .then(data => {                                       // yang diteruskan ke `data` . Jadi `data` mengandung semua pada api tersebut
    const names = data.map(user => user.name);          // method .map() membuat sebuah array baru dimana di dalamnya terdapat user => user.name
                                                        // artinya membuat isi array baru dari `data`yang hanya properti 'name'
    console.log(names);                                 // meng console array baru tersebut 
  })
  .catch(error => console.error(error));                // mengembalikan result error jika method fetch tidak sesuai

  