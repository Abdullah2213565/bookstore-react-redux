const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

export const doAddBook = (book) => ({type :BOOK_ADDED, playload : book});
export const doRemoveBook = (id) => ({type :BOOK_REMOVED, id});

const initialState = [];
const booksReducer = (state = initialState, action ) => {
    switch (action.type) {
        case BOOK_ADDED:
            return [...state, action.playload];
        case BOOK_REMOVED:
            return state.filter((book) = book.id !== action.id);
        default:
            return state;
    }
}

export default booksReducer;