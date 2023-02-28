import { EnumeratorLike } from "../../../ix.js";
import Source_move from "../../Source/__internal__/Source.move.js";
import Enumerator_hasCurrent from "./Enumerator.hasCurrent.js";

const Enumerator_move = <T>(enumerator: EnumeratorLike<T>): boolean => {
  Source_move(enumerator);
  return Enumerator_hasCurrent(enumerator);
};

export default Enumerator_move;
