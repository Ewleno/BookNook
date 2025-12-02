import React, { useState } from "react";
import BookCard from "./BookCard";
import booksData from "./booksData";
import "./HomePage.css";

function Home() {
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortType, setSortType] = useState("title");

  // Get all unique genres from booksData for the dropdown
  const genres = ["All", ...new Set(booksData.map((book) => book.genre))];

  // Filter books by title and genre
  const filteredBooks = booksData
    .filter((book) => 
      book.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (selectedGenre === "All" || book.genre === selectedGenre)
    )
    .sort((a, b) => {
      if (sortType === "title") return a.title.localeCompare(b.title);
      if (sortType === "year") return a.year - b.year;
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Library</h1>

      {/* Filters + Sort */}
      <div className="controls">
        {/* Search by Title */}
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        {/* Filter by Genre */}
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="year">Sort by Year</option>
        </select>
      </div>

      {/* Book list */}
      <div className="books-container">
        {filteredBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
