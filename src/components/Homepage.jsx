import { Row } from "react-bootstrap";
import AlbumList from "./AlbumList";
import FetchAlbumsData from "./FetchAlbumsData";
import { useSelector } from "react-redux";
import SearchResults from "./SearchResults";
import { useEffect } from "react";

const Home = () => {
  let rockArtists = ["queen", "ACDC", "thepolice", "RollingStones", "redhotchilipepers", "oasis", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "harrystyles", "taylorswift", "katyperry", "arianagrande"];
  let hipHopArtists = ["drake", "travisscott", "Dr. Dre", "drake", "Ice Cube"];

  const rockAlbums = FetchAlbumsData(rockArtists);
  const popAlbums = FetchAlbumsData(popArtists);
  const hiphopAlbums = FetchAlbumsData(hipHopArtists);

  const results = useSelector((state) => state.search.searchResults);

  useEffect(() => {
    console.log("ciao home");
  });

  return (
    <Row className="col-12 col-md-9" id="mainPage">
      <SearchResults results={results} />
      <AlbumList title="Rock Classics" albums={rockAlbums} />
      <AlbumList title="Rap" albums={hiphopAlbums} />
      <AlbumList title="Pop Culture" albums={popAlbums} />
    </Row>
  );
};

export default Home;
