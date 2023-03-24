import { pipe } from "../../../functions.js";
import { EnumerableLike, RunnableLike } from "../../../rx.js";
import Enumerable_create from "../../../rx/Enumerable/__internal__/Enumerable.create.js";
import { DisposableLike_dispose } from "../../../util.js";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule.js";
import Runnable_create from "../../Runnable/__internal__/Runnable.create.js";

interface ObservableEmpty {
  <T>(): EnumerableLike<T>;
  <T>(options: { delay: number }): RunnableLike<T>;
}
const Observable_empty: ObservableEmpty = (<T>(options?: { delay: number }) =>
  (options?.delay ?? 0) > 0
    ? Runnable_create<T>(observer => {
        pipe(
          observer,
          Observer_schedule(() => observer[DisposableLike_dispose](), options),
        );
      })
    : Enumerable_create<T>(observer => {
        observer[DisposableLike_dispose]();
      })) as ObservableEmpty;

export default Observable_empty;
