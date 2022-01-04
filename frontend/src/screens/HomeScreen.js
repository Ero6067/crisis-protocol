import { Col, Row } from "react-bootstrap";
import characters from "../characters";
import Character from "../components/Character";

const HomeScreen = () => {
  return (
    <>
      <h1 className="text-white">Characters</h1>
      <Row>
        {characters.map((character) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Character key={character._id} character={character} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
