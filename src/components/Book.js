import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { doRemoveBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  const percentage = 70;
  return (
    <li className="book-card">
      <div className="book-name-wrapper">
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="book-buttons-wrap">
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => {
              dispatch(doRemoveBook(id));
            }}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress-section">
        <div className="progress-bar-wrapper">
          <div className="circular-progressbar">
            <CircularProgressbar
              className="progresBar"
              value={percentage}
            />
          </div>
          <div>
            <p className="percentage-el">
              {percentage}
              %
            </p>
            <span>Completed</span>
          </div>
        </div>
        <div className="chapter-info">
          <p>Current Chapter</p>
          <p>Chapter 10</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
