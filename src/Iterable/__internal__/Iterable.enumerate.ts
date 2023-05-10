import type * as Iterable from "../../Iterable.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe, returns } from "../../functions.js";

const Iterable_enumerate: Iterable.Signature["enumerate"] = /*@__PURE__*/ (<
  T,
>() =>
  returns((iterable: Iterable<T>) =>
    pipe(iterable[Symbol.iterator](), Iterator_enumerate()),
  ))();

export default Iterable_enumerate;
