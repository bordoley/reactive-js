import { EnumerableLike } from "../../../ix.js";
import { ToEnumerableObservable } from "../../../rx.js";
import Enumerable_toRunnableObservable from "./Enumerable.toRunnableObservable.js";

const Enumerable_toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  Enumerable_toRunnableObservable as ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];

export default Enumerable_toEnumerableObservable;
