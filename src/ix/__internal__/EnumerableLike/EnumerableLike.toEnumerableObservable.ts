import { EnumerableLike } from "../../../ix";
import { ToEnumerableObservable } from "../../../rx";
import EnumerableLike__toRunnableObservable from "./EnumerableLike.toRunnableObservable";

const EnumerableLike__toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"] =
  EnumerableLike__toRunnableObservable as ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];

export default EnumerableLike__toEnumerableObservable;
