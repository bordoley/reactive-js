import { IterableLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import Enumerable_toAsyncEnumerable from "../../../rx/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import { ToAsyncEnumerable } from "../../../streaming.js";
import Iterable_toObservable from "./Iterable.toObservable.js";

const Iterable_toAsyncEnumerable: ToAsyncEnumerable<
  IterableLike,
  { delay?: number }
>["toAsyncEnumerable"] = <T>(options?: { delay?: number }) =>
  compose(Iterable_toObservable<T>(), Enumerable_toAsyncEnumerable(options));

export default Iterable_toAsyncEnumerable;
