import { compose, returns } from "../../../functions";
import { ToAsyncEnumerable } from "../../../ix";
import Enumerable_toAsyncEnumerable from "../../../ix/Enumerable/__internal__/Enumerable.toAsyncEnumerable";
import { EnumerableObservableLike } from "../../../rx";
import EnumerableObservable_toEnumerable from "./EnumerableObservable.toEnumerable";

const EnumerableObservable_toAsyncEnumerable: ToAsyncEnumerable<EnumerableObservableLike>["toAsyncEnumerable"] =
  /*@__PURE__*/ returns(
    compose(
      EnumerableObservable_toEnumerable(),
      Enumerable_toAsyncEnumerable(),
    ),
  );

export default EnumerableObservable_toAsyncEnumerable;
