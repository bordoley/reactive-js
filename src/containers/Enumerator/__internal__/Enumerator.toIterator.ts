import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../../containers.js";
import { Function1 } from "../../../functions.js";

const Enumerator_toIterator = <T>(): Function1<
  EnumeratorLike<T>,
  Iterator<T>
> =>
  function* (enumerator: EnumeratorLike<T>) {
    while (enumerator[EnumeratorLike_move]()) {
      yield enumerator[EnumeratorLike_current];
    }
  };

export default Enumerator_toIterator;
