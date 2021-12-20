import { Card } from "react-bootstrap";

const character = ({ character }) => {
  return (
    <Card className="my-3 p-3 rounced">
      <a href={`/character/${character._id}`}></a>
    </Card>
  );
};

export default character;
