import { IterableLike } from "../../../containers";
import { compose } from "../../../functions";
import Enumerable$toEnumerableObservable from "../../../ix/__internal__/Enumerable/Enumerable.toEnumerableObservable";
import { ToEnumerableObservable } from "../../../rx";
import Iterable$toEnumerable from "./Iterable.toEnumerable";

const Iterable$toEnumerableObservable: ToEnumerableObservable<IterableLike>["toEnumerableObservable"] =
  _ => compose(Iterable$toEnumerable(), Enumerable$toEnumerableObservable());

export default Iterable$toEnumerableObservable;
