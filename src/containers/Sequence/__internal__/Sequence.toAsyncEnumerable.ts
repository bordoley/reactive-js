import { SequenceLike } from "../../../containers.js";
import { compose } from "../../../functions.js";
import Enumerable_toAsyncEnumerable from "../../../rx/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import { ToAsyncEnumerable } from "../../../streaming.js";
import Sequence_toObservable from "./Sequence.toObservable.js";

const Sequence_toAsyncEnumerable: ToAsyncEnumerable<
  SequenceLike,
  { delay?: number }
>["toAsyncEnumerable"] = <T>(options?: { delay?: number }) =>
  compose(Sequence_toObservable<T>(), Enumerable_toAsyncEnumerable(options));

export default Sequence_toAsyncEnumerable;
