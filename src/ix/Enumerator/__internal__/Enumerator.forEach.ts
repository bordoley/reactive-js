import { Function1, SideEffect1 } from "../../../functions.js";
import { EnumeratorLike } from "../../../ix.js";

import Enumerator_getCurrent from "./Enumerator.getCurrent.js";
import Enumerator_move from "./Enumerator.move.js";

const Enumerator_forEach =
  <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(
    f: SideEffect1<T>,
  ): Function1<TEnumerator, TEnumerator> =>
  enumerator => {
    while (Enumerator_move(enumerator)) {
      f(Enumerator_getCurrent(enumerator));
    }
    return enumerator;
  };

export default Enumerator_forEach;
