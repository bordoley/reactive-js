import { hasDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
import { pipe, pipeLazy } from "../../../functions";
import { dispose } from "../../../util/DisposableLike";
import { schedule } from "../../ObserverLike";
import EnumerableObservableLike__create from "../EnumerableObservableLike/EnumerableObservableLike.create";
import RunnableObservableLike__create from "../RunnableObservableLike/RunnableObservableLike.create";

const ObservableLike__empty = <T>(options?: { delay: number }) =>
  hasDelay(options)
    ? RunnableObservableLike__create<T>(observer => {
        pipe(observer, schedule(pipeLazy(observer, dispose()), options));
      })
    : EnumerableObservableLike__create<T>(sink => {
        pipe(sink, dispose());
      });

export default ObservableLike__empty;
