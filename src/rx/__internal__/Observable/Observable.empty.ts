import { pipe, pipeLazy } from "../../../functions";
import { hasDelay } from "../../../scheduling/__internal__/Scheduler.options";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import EnumerableObservable$create from "../EnumerableObservable/EnumerableObservable.create";
import Observer$schedule from "../Observer/Observer.schedule";
import RunnableObservable$create from "../RunnableObservable/RunnableObservable.create";

const Observable$empty = <T>(options?: { delay: number }) =>
  hasDelay(options)
    ? RunnableObservable$create<T>(observer => {
        pipe(
          observer,
          Observer$schedule(pipeLazy(observer, Disposable$dispose()), options),
        );
      })
    : EnumerableObservable$create<T>(sink => {
        pipe(sink, Disposable$dispose());
      });

export default Observable$empty;
