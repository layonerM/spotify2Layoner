import { Col, Container, Row } from "reactstrap";
import { HomepageLongCard } from "../component/Card/Card";
import data from "../data/data.json";
import { Link } from "react-router-dom";
import { userAtom } from "../recoil";
import { useRecoilValue } from "recoil";
import PlayListSection from "../component/Section/PlaylistSection";
const HomePage = () => {
  function getTimeGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var greeting;

    if (hour < 12) {
      greeting = "Good morning!";
    } else if (hour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }

    return greeting;
  }
  const user = useRecoilValue(userAtom);
  return (
    <>
      {user.user && (
        <Container fluid className="px-4 mt-4">
          <div className="d-flex justify-content-between ">
            <h4 className="fw-bold">{getTimeGreeting()}</h4>
          </div>
          <Row className=" no-gutters m-0 p-0  overflow-hidden ">
            {data.playlists.slice(0, 6).map((item, index) => (
              <>
                <Col
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={4}
                  className=""
                  key={index}
                >
                  <Link
                    className="text-decoration-none"
                    to={`/playlist/${item.id + "xyseffea235fe1"}`}
                    state={{ data: item, itemId: item.id }}
                  >
                    <HomepageLongCard item={item} />
                  </Link>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      )}
      <PlayListSection title="Albums" data={data.albums} />
      <PlayListSection title="Spotify Playlists" data={data.playlists} />
      <PlayListSection title="Focus" data={[...data.albums].reverse()} />
    </>
  );
};

export default HomePage;
