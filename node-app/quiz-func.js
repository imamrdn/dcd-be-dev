const greatAuthors = books.filter((book) => book.sales > 1000000).map((book) => {
    return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`
});

console.log(greatAuthors);