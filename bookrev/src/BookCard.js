import React, { useState } from "react";
import "./bookCard.css";

export default function BookCard({ book }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="book-card" onClick={handleClick}>
      {showDescription ? (
        <div className="book-description">
          <h3>{book.title}</h3>
          <p>{book.description || "No description available."}</p>
        </div>
      ) : (
        <>
          <div className="book-image-container">
            <img src={book.image} alt={book.title} />
          </div>

          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Year:</strong> {book.year}</p>
          <p><strong>Genre:</strong> {book.genre}</p>

          {/* ⭐ ADDED RATING HERE */}
          <p><strong>Rating:</strong> {book.rating ?? "No rating"} ⭐</p>
        </>
      )}
    </div>
  );
}
