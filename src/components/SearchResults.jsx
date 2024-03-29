import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const SearchResults = ({ results }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isFormVisible] = useState(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      console.log("Search:", searchValue);
    }
  };

  return (
    <Container>
      {isFormVisible && (
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          onKeyUp={handleKeyUp}
          placeholder="Search..."
          className="form-control mb-4"
        />
      )}

      <Row className="d-flex">
        {results &&
          results.length > 0 &&
          results.slice(0, 8).map((result) => (
            <Col key={result.album.id} xs={12} md={6} lg={3} className="mb-3">
              <div className="image-container">
                <Link to={`/album/${result.album.id}`}>
                  <img src={result.album.cover_medium} alt={result.album.title} className="img-fluid" />
                  <div className="overlay">
                    <div className="text">
                      <Link className="h5 text-light" to={`/album/${result.album.id}`}>
                        {result.album.title}
                      </Link>
                      <Link className="h6 text-light" to={`/artist/${result.artist.id}`}>
                        {result.artist.name}
                      </Link>
                    </div>
                  </div>
                </Link>

                <div className="card-footer">
                  <p className="card-text text-white">{result.album.title}</p>
                  <p className="card-text text-white">{result.artist.name}</p>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
