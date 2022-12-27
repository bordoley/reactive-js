import {
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import SourceLike__move from "../SourceLike/SourceLike.move";
import EnumeratorLike__hasCurrent from "./EnumeratorLike.hasCurrent";

const move = <T>(enumerator: {
  [EnumeratorLike_current]: T;
  [EnumeratorLike_hasCurrent]: boolean;
  [SourceLike_move]: () => void;
}): boolean => {
  SourceLike__move(enumerator);
  return EnumeratorLike__hasCurrent(enumerator);
};

export default move;
