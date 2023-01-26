import {
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import Source_move from "../Source/Source.move";
import Enumerator_hasCurrent from "./Enumerator.hasCurrent";

const Enumerator_move = <T>(enumerator: {
  [EnumeratorLike_current]: T;
  [EnumeratorLike_hasCurrent]: boolean;
  [SourceLike_move]: () => void;
}): boolean => {
  Source_move(enumerator);
  return Enumerator_hasCurrent(enumerator);
};

export default Enumerator_move;
