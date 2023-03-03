import Container_compute from "../../../containers/Container/__internal__/Container.compute.js";
import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { Factory, isSome, none } from "../../../functions.js";
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
  <T>(options?: { delay?: number }) =>
    ReadonlyArray_toObservable<T>(
      isSome(options)
        ? { ...options, ...(isSome(options.delay) ? { delayStart: true } : {}) }
        : none,
    ),
  Observable_map,
) as ObservableCompute;

export default Observable_compute;
