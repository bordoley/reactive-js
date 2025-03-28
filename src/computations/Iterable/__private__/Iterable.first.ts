import { IterableLike } from "../../../computations.js";
import { Function1, Optional, none, returns } from "../../../functions.js";

const Iterable_first: <T>() => Function1<IterableLike<T>, Optional<T>> =
  /*@__PURE__*/ returns((iter: IterableLike) => {
    for (const v of iter) {
      return v;
    }
    return none;
  }) as <T>() => Function1<IterableLike<T>, Optional<T>>;

export default Iterable_first;
