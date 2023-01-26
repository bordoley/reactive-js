import { EnumerableLike } from "../../../ix";
import { ToEnumerableObservable } from "../../../rx";
import Enumerable$toRunnableObservable from "./Enumerable.toRunnableObservable";

const Enumerable$toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  Enumerable$toRunnableObservable as ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];

export default Enumerable$toEnumerableObservable;
