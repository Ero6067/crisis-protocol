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
      {/* Character Information*/}
      <Row>
        <Col md={6}>
          <Image src={`../${character.image}`} alt={character.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <Row>
                <Col md={8}>
                  <h2 className="mb-0">{character.name}</h2>
                  <div>{character.alias}</div>
                </Col>
                <Col>Points: {character.statistics.height}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <h3>Affiliation</h3>
              {Object.values(character.affiliation).map((affiliations) => {
                return <div>{affiliations}</div>;
              })}
            </ListGroupItem>
            <ListGroupItem>
              <h3>Statistics</h3>
              <Row>
                <Col className="px-2">
                  Health: {character.statistics.health}
                </Col>
                <Col className="px-2">Speed: {character.statistics.speed}</Col>
                <Col className="px-2">
                  Height: {character.statistics.height}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <h3>Defence</h3>
              <Row>
                <Col className="px-2">
                  Physical: {character.defence.physical}
                </Col>
                <Col className="px-2">Energy: {character.defence.energy}</Col>
                <Col className="px-2">Mystic: {character.defence.mystic}</Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
      {/* Attacks & Superpowers */}
      <Row>
        <Col md={7}>
          {Object.values(character.superpowers).map((supers) => {
            return <div className="attack-name">{supers}</div>;
          })}
        </Col>
      </Row>
    </>
  );
};

export default CharacterScreen;
