import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Card,
  Button,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import characters from "../characters";

const CharacterScreen = () => {
  const params = useParams();
  const character = characters.find((p) => p._id === params.id);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={`../${character.image}`} alt={character.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>{character.name}</h2>
              <div>{character.alias}</div>
              <div>{character.expansion}</div>
            </ListGroupItem>
            <ListGroupItem>
              <h3>Affiliation</h3>
              {Object.values(character.affiliation).map((affiliations) => {
                return <div>{affiliations}</div>;
              })}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default CharacterScreen;
