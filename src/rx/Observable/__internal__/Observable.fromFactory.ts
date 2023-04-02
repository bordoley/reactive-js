import Container_fromFactory from "../../../containers/Container/__internal__/Container.fromFactory.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { Factory } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";

interface ObservableFromFactory {
  <T>(factory: Factory<T>): EnumerableLike<T>;
  <T>(
    factory: Factory<T>,
    options: {
      readonly delay: number;
    },
  ): RunnableLike<T>;
}
const Observable_fromFactory: ObservableFromFactory =
  /*@__PURE__*/ Container_fromFactory(
    Optional_toObservable,
    Observable_map,
  ) as ObservableFromFactory;

export default Observable_fromFactory;
