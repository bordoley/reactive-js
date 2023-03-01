import { EnumeratorLike, EnumeratorLike_move } from "../../../ix.js";
import Enumerator_hasCurrent from "./Enumerator.hasCurrent.js";

const Enumerator_move = <T>(enumerator: EnumeratorLike<T>): boolean => {
  enumerator[EnumeratorLike_move]();
  return Enumerator_hasCurrent(enumerator);
};

export default Enumerator_move;
