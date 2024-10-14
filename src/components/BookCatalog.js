import React, { useState } from 'react';
import AddBookForm from './AddBookForm';
import Book from './Book';

const BookCatalog = () => {
    const books = [
        { title: '1984', author: 'George Orwell', year: 1949, category: 'Dystopian' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, category: 'Fiction' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, category: 'Classic' },
        { title: 'Brave New World', author: 'Aldous Huxley', year: 1932, category: 'Dystopian' },
        { title: 'Moby Dick', author: 'Herman Melville', year: 1851, category: 'Classic' }
    ];


    const [yearFilter, setYearFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');

    const addBook = (newBook) => {
        const bookList = document.getElementById('book-list');

        const bookDiv = document.createElement('div');
        const bookTitle = document.createElement('h3');
        const bookAuthor = document.createElement('p');
        const bookYear = document.createElement('p');
        const bookCategory = document.createElement('p');
        const removeButton = document.createElement('button');

        bookTitle.textContent = newBook.title;
        bookAuthor.textContent = `Author: ${newBook.author}`;
        bookYear.textContent = `Year: ${newBook.year}`;
        bookCategory.textContent = `Category: ${newBook.category}`;
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        removeButton.onclick = () => {
            bookList.removeChild(bookDiv);
        };

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookYear);
        bookDiv.appendChild(bookCategory);
        bookDiv.appendChild(removeButton);

        bookList.appendChild(bookDiv);
    };
    const filterBooks = () => {
        return books.filter((book) => {
            const yearMatch = yearFilter === 'all' || book.year.toString() === yearFilter;
            const categoryMatch = categoryFilter === 'all' || book.category === categoryFilter;
            return yearMatch && categoryMatch;
        });
    };

    const filteredBooks = filterBooks();

    return (
        <div>
            <h1>Book Catalog</h1>
            <AddBookForm addBook={addBook} />

            <label htmlFor="year-filter">Filter by Year: </label>
            <select id="year-filter" onChange={(e) => setYearFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="1949">1949</option>
                <option value="1960">1960</option>
                <option value="1925">1925</option>
            </select>

            <label htmlFor="category-filter">Filter by Category: </label>
            <select id="category-filter" onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="Dystopian">Dystopian</option>
                <option value="Fiction">Fiction</option>
                <option value="Classic">Classic</option>
            </select>

            <div id="book-list">
                {filteredBooks.map((book, index) => (
                    <Book key={index} title={book.title} author={book.author} year={book.year} category={book.category} />
                ))}
            </div>
        </div>
    );
};

export default BookCatalog;