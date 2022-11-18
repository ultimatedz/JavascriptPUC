const albums = [
    { name: "Mais", singer: "Marisa monte", year: 1991, score: 8.5 },
    { name: "A tempestade", singer: "Legião Urbana", year: 1996, score: 9.5 },
    { name: "Domingo", singer: "Titãs", year: 1995, score: 7.5 },
    { name: "Ouro de Minas", singer: "Roupa Nova", year: 2001, score: 8 },
    { name: "Como estão vocês", singer: "Titãs", year: 2003, score: 7 },
    { name: "Troco Likes", singer: "Thiago Iorc", year: 2015, score: 4.5 },
    { name: "Dois", singer: "Legião Urbana", year: 1986, score: 10 },
    { name: "Radiola", singer: "Skank", year: 2004, score: 6.5 },
    { name: "Roupa acústico", singer: "Roupa Nova", year: 2004, score: 9 },
    { name: "Umbilical", singer: "Thiago Iorc", year: 2011, score: 3.5 },
    { name: "Barulhinho bom", singer: "Marisa monte", year: 1996, score: 7.5 }
  ];


const listaCantorAlbum = albums.map(item =>  `${item.singer}: ${item.name}` )

console.log(listaCantorAlbum)