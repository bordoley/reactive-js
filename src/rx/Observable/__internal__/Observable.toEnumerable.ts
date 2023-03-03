import { ObservableLike, ToEnumerable } from "../../../rx.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_throws from "./Observable.throws.js";

const Observable_toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"] =
  <T>() =>
  (obs: ObservableLike<T>) =>
    Observable_isEnumerable(obs) ? obs : Observable_throws();

export default Observable_toEnumerable;
