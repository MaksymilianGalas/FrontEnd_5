import React from 'react';

const Book = ({ title, author, year, category }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            <p>Category: {category}</p>
        </div>
    );
};
export default Book;

