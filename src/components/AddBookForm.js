import React, { useRef } from 'react';

const AddBookForm = ({ addBook }) => {
    const titleRef = useRef();
    const authorRef = useRef();
    const yearRef = useRef();
    const categoryRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            year: parseInt(yearRef.current.value),
            category: categoryRef.current.value,

        };
        addBook(newBook);
        titleRef.current.value = '';
        authorRef.current.value = '';
        yearRef.current.value = '';
        categoryRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={titleRef} placeholder="Title" required/>
            <input type="text" ref={authorRef} placeholder="Author" required/>
            <input type="number" ref={yearRef} placeholder="Year" required/>
            <input type="text" ref={categoryRef} placeholder="Category" required/>
            <button type="submit">Add Book</button>
        </form>
    );
};

export default AddBookForm;
