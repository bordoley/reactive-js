import { hasDelay } from "../../../__internal__/scheduling/SchedulerLike.options";
import { pipe, pipeLazy } from "../../../functions";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import EnumerableObservableLike__create from "../EnumerableObservableLike/EnumerableObservableLike.create";
import ObserverLike__schedule from "../ObserverLike/ObserverLike.schedule";
import RunnableObservableLike__create from "../RunnableObservableLike/RunnableObservableLike.create";

const ObservableLike__empty = <T>(options?: { delay: number }) =>
  hasDelay(options)
    ? RunnableObservableLike__create<T>(observer => {
        pipe(
          observer,
          ObserverLike__schedule(
            pipeLazy(observer, DisposableLike__dispose()),
            options,
          ),
        );
      })
    : EnumerableObservableLike__create<T>(sink => {
        pipe(sink, DisposableLike__dispose());
      });

export default ObservableLike__empty;
