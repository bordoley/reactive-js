import { ToIterable } from "../../../containers.js";
import { compose, returns } from "../../../functions.js";
import Enumerable_toIterable from "../../../ix/Enumerable/__internal__/Enumerable.toIterable.js";
import { EnumerableObservableLike } from "../../../rx.js";
import EnumerableObservable_toEnumerable from "./EnumerableObservable.toEnumerable.js";

const EnumerableObservable_toIterable: ToIterable<EnumerableObservableLike>["toIterable"] =
  /*@__PURE__*/ returns(
    compose(EnumerableObservable_toEnumerable(), Enumerable_toIterable()),
  );

export default EnumerableObservable_toIterable;
