import { PromiseableLike } from "../../../containers";
import { pipe } from "../../../functions";
import { ObservableLike, ToObservable } from "../../../rx";
import { getDispatcher } from "../../../rx/ObserverLike";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import DispatcherLike__dispatch from "../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatch";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__toErrorHandler from "../../../util/__internal__/DisposableLike/DisposableLike.toErrorHandler";

const PromiseableLike__toObservable: ToObservable<PromiseableLike>["toObservable"] =

    <T>() =>
    (promise: PromiseableLike<T>): ObservableLike<T> =>
      ObservableLike__create(observer => {
        const dispatcher = getDispatcher(observer);

        promise.then(next => {
          if (!DisposableLike__isDisposed(dispatcher)) {
            pipe(
              dispatcher,
              DispatcherLike__dispatch(next),
              DisposableLike__dispose(),
            );
          }
        }, DisposableLike__toErrorHandler(dispatcher));
      });

export default PromiseableLike__toObservable;
