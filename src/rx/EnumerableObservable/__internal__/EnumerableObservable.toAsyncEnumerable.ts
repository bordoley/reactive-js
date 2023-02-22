import { compose, returns } from "../../../functions.js";
import { ToAsyncEnumerable } from "../../../ix.js";
import Enumerable_toAsyncEnumerable from "../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable.js";
import { EnumerableObservableLike } from "../../../rx.js";
import EnumerableObservable_toEnumerable from "./EnumerableObservable.toEnumerable.js";

const EnumerableObservable_toAsyncEnumerable: ToAsyncEnumerable<EnumerableObservableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ (() =>
    returns(
      compose(
        EnumerableObservable_toEnumerable(),
        Enumerable_toAsyncEnumerable(),
      ),
    ))();

export default EnumerableObservable_toAsyncEnumerable;
