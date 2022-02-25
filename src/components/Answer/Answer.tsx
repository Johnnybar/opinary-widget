import React from "react";
import "./Answer.scss";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

function Answer({ answer, vote, id, incrementVoteCount }: AnswerProps) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{answer}</Card.Title>
        <motion.button
          className="opinary-answer__button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ rotate: "-40deg" }}
          onClick={() => incrementVoteCount(id)}
        >
          Vote
        </motion.button>
      </Card.Body>
      <Card.Footer>Vote count: {vote}</Card.Footer>
    </Card>
  );
}
export default Answer;
