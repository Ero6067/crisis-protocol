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
        <Col md={5}>
          <Image src={`../${character.image}`} alt={character.name} fluid />
        </Col>
        <Col md={7}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <Row>
                <Col md={8}>
                  <h2 className="mb-0">{character.name}</h2>
                  <div>{character.alias}</div>
                </Col>
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
                <Col>
                  <i class="fas fa-heartbeat"></i> {character.statistics.health}
                </Col>
                <Col>
                  <i class="fas fa-angle-double-right"></i>{" "}
                  {character.statistics.speed}
                </Col>
                <Col>
                  <i class="fas fa-arrows-alt-v"></i>{" "}
                  {character.statistics.height}
                </Col>
                <Col>
                  <i class="fas fa-dna"></i>
                  {character.statistics.height}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <h3>Defence</h3>
              <Row>
                <Col md={3}>
                  <i class="fas fa-fist-raised"></i>{" "}
                  {character.defence.physical}
                </Col>
                <Col md={3}>
                  <i class="fas fa-atom"></i> {character.defence.energy}
                </Col>
                <Col>
                  <i class="fas fa-eye"></i> {character.defence.mystic}
                </Col>
              </Row>
            </ListGroupItem>
            {Object.values(character.attacks).map((att) => {
              return (
                <ListGroupItem>
                  <Row>
                    <Col md={6}>
                      {att.type === "Physical" ? (
                        <i class="fas fa-fist-raised"></i>
                      ) : att.type === "Energy" ? (
                        <i class="fas fa-atom"></i>
                      ) : (
                        <i class="fas fa-eye"></i>
                      )}
                      {" " + att.name}
                    </Col>

                    <Col className="">
                      <i class="fas fa-crosshairs"></i>
                      {att.range}
                    </Col>
                    <Col className="">
                      <i class="fas fa-dumbbell"></i>
                      {att.damage}
                    </Col>
                    <Col className="">
                      <i class="fas fa-sun"></i>
                      {att.cost}
                    </Col>
                  </Row>
                  {att.text ? <ul className="my-1">{att.text}</ul> : ""}
                  {/* {Object.values(character.attacks.special).map((special) => {
                    {
                      console.log(special);
                    }
                    return special;
                  })} */}
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default CharacterScreen;
