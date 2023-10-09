import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { none } from "../../../functions.js";

const empty: EnumeratorLike = {
  [EnumeratorLike_current]: none,
  [EnumeratorLike_hasCurrent]: false,
  [EnumeratorLike_isCompleted]: true,
  [EnumeratorLike_move](): boolean {
    return false;
  },
};

const Enumerator_empty = <T>(): EnumeratorLike<T> => empty as EnumeratorLike<T>;

export default Enumerator_empty;
