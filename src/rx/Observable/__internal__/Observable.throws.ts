import Container_throws from "../../../containers/Container/__internal__/Container.throws.js";
import { Factory } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
import Observable_fromFactory from "./Observable.fromFactory.js";

interface ObservableThrows {
  throws<T>(): EnumerableLike<T>;
  throws<T>(options: { readonly raise: Factory<unknown> }): EnumerableLike<T>;
  throws<T>(options: {
    readonly delay: number;
    readonly raise?: Factory<unknown>;
  }): RunnableLike<T>;
}
const Observable_throws: ObservableThrows["throws"] =
  /*@__PURE__*/ Container_throws(
    Observable_fromFactory,
  ) as ObservableThrows["throws"];

export default Observable_throws;
