import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
const character = ({ character }) => {
  return (
    <Card className="my-3 p-2 rounded" bg="dark">
      <Link to={`/character/${character._id}`}>
        <Card.Img src={character.image} variant="top" />
      </Link>

      <Card.Body className="text-center poppins">
        <Link
          to={`/character/${character._id}`}
          className="text-decoration-none"
        >
          <Card.Title as="div" className="bold">
            <strong>{character.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className=" regular">{character.expansion}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default character;
