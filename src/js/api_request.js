const axios = require('axios').default;


export async function fetchCategoryList() {

    try {
        const { data } = await axios.get('https://books-backend.p.goit.global/books/category-list');
        
        return data;

    } catch (error) {
        console.log(error);
    }
}


export async function fetchTopBooks() {
    try {
        const { data } = await axios.get('https://books-backend.p.goit.global/books/top-books');
        let books = await data.map(category => category.books);
      
        return books;
    } catch (error) {
        console.log(error);
    }
}