/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/



const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


const totalCategories = booksByCategory.length;
console.log(totalCategories);

for (let contCategory of booksByCategory) {
    console.log(`Total de livros da categoria: ${contCategory.category}`);
    console.log(contCategory.books.length);
}

function countAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            }
        }
    }
    console.log(`Total de autores é ${authors.length} `);
}

function searchAuthorBook(author) {
    let books = [];
    authorformat = String(author).toUpperCase();


    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author.toUpperCase().includes(authorformat)) {
                books.push(book.title);
            }

        }

    }
    if (books.length == 0) {
        throw new Error('Autor não localizado');
    }
    console.log(`os livros do ${author} são: ${books.join(", ")}`)

}

try {
    countAuthors();
    searchAuthorBook("cury");
} catch (error) {
    console.log(error.message);
}


