import Container_throws from "../../../containers/Container/__internal__/Container.throws.js";
import { Factory } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
import Observable_fromFactory from "./Observable.fromFactory.js";

interface ObservableThrows {
  <T>(): EnumerableLike<T>;
  <T>(options: { raise: Factory<unknown> }): EnumerableLike<T>;
  <T>(options: { delay: number; raise?: Factory<unknown> }): RunnableLike<T>;
}
const Observable_throws: ObservableThrows = /*@__PURE__*/ Container_throws(
  Observable_fromFactory,
) as ObservableThrows;

export default Observable_throws;
