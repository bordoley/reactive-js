import type * as Enumerator from "../../Enumerator.js";
import { none } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const empty: EnumeratorLike = {
  [EnumeratorLike_current]: none,
  [EnumeratorLike_hasCurrent]: false,
  [EnumeratorLike_move]: function (): boolean {
    return false;
  },
};

const Enumerator_empty: Enumerator.Signature["empty"] = <T>() =>
  empty as EnumeratorLike<T>;

export default Enumerator_empty;
