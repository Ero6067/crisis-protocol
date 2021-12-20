import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import characters from "../characters";

const CharacterScreen = () => {
  const params = useParams();
  const character = characters.find((p) => p._id === params.id);
  console.log(character);

  return <div>{character.name}</div>;
};

export default CharacterScreen;
