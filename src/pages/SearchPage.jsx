import { Col, Container, Row } from "reactstrap";
import { searchResultSelector } from "../recoil";
import { useRecoilValue } from "recoil";
import data from "../data/data.json";
import { PlaylistCard, SearchCard } from "../component/Card/Card";
import SongList from "../component/Section/SongList";
import PlayListSection from "../component/Section/PlaylistSection";
const SearchPage = () => {
  const artist = useRecoilValue(searchResultSelector);
  let songs = [];
  if (artist != "No result found" && artist != "") {
    const album = data.albums.find((album) => album.artistId === artist.id);
    songs = album.songs;
  }
  return (
    <>
      {artist != "No result found" && artist != "" && (
        <>
          <Container fluid className="m-0  mt-3 p-0">
            <Row className="m-0 ms-3 p-0 d-flex">
              <SearchCard image_url={artist.image_url} name={artist.name} />

              <Col className="col-9 p-0 ">
                <Row className="px-2 m-0">
                  <h2 className="fw-semibold" style={{ fontSize: "1.5rem" }}>
                    Songs
                  </h2>
                  {songs.map((id, index) => {
                    const { name, artist, duration, image_url } =
                      data.songs[id];
                    return (
                      <SongList
                        name={name}
                        artist={artist}
                        duration={duration}
                        image_url={image_url}
                      />
                    );
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
          <Container fluid className="p-0 mt-4">
            <PlayListSection
              title={`Featuring ${artist.name}`}
              data={data.albums.slice(0, 4)}
            />
          </Container>
          <Container fluid className="px-4 mt-4">
            <div className="d-flex justify-content-between ">
              <h4 className="fw-bold">Artists</h4>
              <span>Show all</span>
            </div>
            <Row className="no-gutters m-0 p-0 flex-nowrap overflow-hidden ">
              {data.artists.map((item, index) => {
                return (
                  <Col
                    xs={6}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    className="my-3 gap-0"
                    key={index}
                  >
                    <PlaylistCard item={item} roundedImage="rounded-circle" />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </>
      )}
      <PlayListSection title="Playlists" data={data.playlists} />
      <PlayListSection title="Albums" data={data.albums} />
    </>
  );
};

export default SearchPage;
