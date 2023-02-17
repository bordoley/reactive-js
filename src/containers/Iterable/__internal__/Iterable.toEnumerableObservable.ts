import { IterableLike } from "../../../containers";
import { compose, returns } from "../../../functions";
import Enumerable_toEnumerableObservable from "../../../ix/Enumerable/__internal__/Enumerable.toEnumerableObservable";
import { ToEnumerableObservable } from "../../../rx";
import Iterable_toEnumerable from "./Iterable.toEnumerable";

const Iterable_toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  /*@__PURE__*/ returns(
    compose(Iterable_toEnumerable(), Enumerable_toEnumerableObservable()),
  );

export default Iterable_toEnumerableObservable;
