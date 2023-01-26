import { Function1, SideEffect1 } from "../../../functions";
import { EnumeratorLike } from "../../../ix";

import Enumerator$getCurrent from "./Enumerator.getCurrent";
import Enumerator$move from "./Enumerator.move";

const Enumerator$forEach =
  <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(
    f: SideEffect1<T>,
  ): Function1<TEnumerator, TEnumerator> =>
  enumerator => {
    while (Enumerator$move(enumerator)) {
      f(Enumerator$getCurrent(enumerator));
    }
    return enumerator;
  };

export default Enumerator$forEach;
