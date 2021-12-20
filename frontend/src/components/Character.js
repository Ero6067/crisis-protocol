import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const character = ({ character }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/character/${character._id}`}>
        <Card.Img src={character.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/character/${character._id}`}>
          <Card.Title as="div">
            <strong>{character.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="mt-3">{character.expansion}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default character;
