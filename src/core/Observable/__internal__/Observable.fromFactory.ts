import { EnumerableLike, RunnableLike } from "../../../core.js";
import Container_fromFactory from "../../../core/Container/__internal__/Container.fromFactory.js";
import Optional_toObservable from "../../../core/Optional/__internal__/Optional.toObservable.js";
import { Factory } from "../../../functions.js";
import Observable_map from "./Observable.map.js";

interface ObservableFromFactory {
  fromFactory<T>(factory: Factory<T>): EnumerableLike<T>;
  fromFactory<T>(
    factory: Factory<T>,
    options: {
      readonly delay: number;
    },
  ): RunnableLike<T>;
}
const Observable_fromFactory: ObservableFromFactory["fromFactory"] =
  /*@__PURE__*/ Container_fromFactory(
    Optional_toObservable,
    Observable_map,
  ) as ObservableFromFactory["fromFactory"];

export default Observable_fromFactory;
