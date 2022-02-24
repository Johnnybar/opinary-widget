type Optional<T> = T | null;
type incrementVoteCount = (id: string) => void;

interface AppProps {
  domElement: Element;
}

interface AnswerProps {
  answer: string;
  vote: number;
  id: string;
  incrementVoteCount: incrementVoteCount;
}
