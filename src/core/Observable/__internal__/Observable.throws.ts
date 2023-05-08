import { EnumerableLike, RunnableLike } from "../../../core.js";
import { Factory, error, raise } from "../../../functions.js";
import Observable_fromFactory from "./Observable.fromFactory.js";

interface ObservableThrows {
  throws<T>(): EnumerableLike<T>;
  throws<T>(options: { readonly raise: Factory<unknown> }): EnumerableLike<T>;
  throws<T>(options: {
    readonly delay: number;
    readonly raise?: Factory<unknown>;
  }): RunnableLike<T>;
}
const Observable_throws: ObservableThrows["throws"] = (<T>(options?: {
  readonly delay?: number;
  readonly raise?: Factory<unknown>;
}) => {
  const { raise: factory = raise } = options ?? {};
  return Observable_fromFactory<T>(
    () => raise(error(factory())),
    options as any,
  );
}) as ObservableThrows["throws"];

export default Observable_throws;
