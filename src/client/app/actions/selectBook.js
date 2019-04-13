export const selectBook = (book) => {
    console.log("You have selected the book "  + book);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
};