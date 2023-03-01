import { EnumerableLike } from "../../../ix.js";
import { ToEnumerableObservable } from "../../../rx.js";
import Enumerable_toRunnable from "./Enumerable.toRunnable.js";

const Enumerable_toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  Enumerable_toRunnable as ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];

export default Enumerable_toEnumerableObservable;
