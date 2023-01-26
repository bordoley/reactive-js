import {
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import Source$move from "../Source/Source.move";
import Enumerator$hasCurrent from "./Enumerator.hasCurrent";

const Enumerator$move = <T>(enumerator: {
  [EnumeratorLike_current]: T;
  [EnumeratorLike_hasCurrent]: boolean;
  [SourceLike_move]: () => void;
}): boolean => {
  Source$move(enumerator);
  return Enumerator$hasCurrent(enumerator);
};

export default Enumerator$move;
