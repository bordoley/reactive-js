import { EnumerableLike } from "../../../ix";
import { ToEnumerableObservable } from "../../../rx";
import Enumerable_toRunnableObservable from "./Enumerable.toRunnableObservable";

const Enumerable_toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  Enumerable_toRunnableObservable as ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];

export default Enumerable_toEnumerableObservable;
