import React from "react";
import "./Answer.scss";
import { Card, Button } from "react-bootstrap";

type AnswerProps = {
  answer: string;
  vote: number;
  id: number;
  incrementVoteCount: incrementVoteCount;
};
function Answer({ answer, vote, id, incrementVoteCount }: AnswerProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{answer}</Card.Title>
        <Button variant="success" onClick={() => incrementVoteCount(id)}>
          Vote
        </Button>
      </Card.Body>
      <Card.Footer>Vote count: {vote}</Card.Footer>
    </Card>
  );
}
export default Answer;
