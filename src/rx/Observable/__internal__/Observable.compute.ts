import Container_compute from "../../../containers/Container/__internal__/Container.compute.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional_toObservable.js";
import { Factory } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";

interface ObservableCompute {
  <T>(factory: Factory<T>): EnumerableLike<T>;
  <T>(
    factory: Factory<T>,
    options: {
      delay: number;
    },
  ): RunnableLike<T>;
}
const Observable_compute: ObservableCompute = /*@__PURE__*/ Container_compute(
  Optional_toObservable,
  Observable_map,
) as ObservableCompute;

export default Observable_compute;
