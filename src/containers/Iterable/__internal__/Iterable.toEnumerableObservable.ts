import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import Enumerable_toEnumerableObservable from "../../../ix/Enumerable/__internal__/Enumerable.toEnumerableObservable";
import { ToEnumerableObservable } from "../../../rx";
import Iterable_toEnumerable from "./Iterable.toEnumerable";

const Iterable_toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  _ => compose(Iterable_toEnumerable(), Enumerable_toEnumerableObservable());

export default Iterable_toEnumerableObservable;
