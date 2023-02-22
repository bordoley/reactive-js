import { IterableLike } from "../../../containers.js";
import { compose, returns } from "../../../functions.js";
import Enumerable_toEnumerableObservable from "../../../ix/Enumerable/__internal__/Enumerable.toEnumerableObservable.js";
import { ToEnumerableObservable } from "../../../rx.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";

const Iterable_toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  /*@__PURE__*/ returns(
    compose(Iterable_toEnumerable(), Enumerable_toEnumerableObservable()),
  );

export default Iterable_toEnumerableObservable;
