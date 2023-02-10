import { pipe, pipeLazy } from "../../../functions";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import EnumerableObservable_create from "../../EnumerableObservable/__internal__/EnumerableObservable.create";
import Observer_schedule from "../../Observer/__internal__/Observer.schedule";
import RunnableObservable_create from "../../RunnableObservable/__internal__/RunnableObservable.create";

const Observable_empty = <T>(options?: { delay: number }) =>
  hasDelay(options)
    ? RunnableObservable_create<T>(observer => {
        pipe(
          observer,
          Observer_schedule(pipeLazy(observer, Disposable_dispose()), options),
        );
      })
    : EnumerableObservable_create<T>(sink => {
        pipe(sink, Disposable_dispose());
      });

export default Observable_empty;
