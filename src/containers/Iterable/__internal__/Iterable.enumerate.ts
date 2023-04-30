import { EnumeratorLike } from "../../../containers.js";
import { Function1, pipe, returns } from "../../../functions.js";

import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";

const Iterable_enumerate: <T>() => Function1<Iterable<T>, EnumeratorLike<T>> =
  /*@__PURE__*/ (<T>() =>
    returns((iterable: Iterable<T>) =>
      pipe(iterable[Symbol.iterator](), Iterator_enumerate()),
    ))();

export default Iterable_enumerate;
