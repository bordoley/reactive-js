import { Function1, SideEffect1 } from "../../../functions";
import { EnumeratorLike } from "../../../ix";

import EnumeratorLike__getCurrent from "./EnumeratorLike.getCurrent";
import EnumeratorLike__move from "./EnumeratorLike.move";

const EnumeratorLike__forEach =
  <T, TEnumerator extends EnumeratorLike<T> = EnumeratorLike<T>>(
    f: SideEffect1<T>,
  ): Function1<TEnumerator, TEnumerator> =>
  enumerator => {
    while (EnumeratorLike__move(enumerator)) {
      f(EnumeratorLike__getCurrent(enumerator));
    }
    return enumerator;
  };

export default EnumeratorLike__forEach;
