import { PromiseableLike } from "../../../containers";
import { pipe } from "../../../functions";
import { ObservableLike, ToObservable } from "../../../rx";
import { getDispatcher } from "../../../rx/ObserverLike";
import ObservableLike__create from "../../../rx/__internal__/ObservableLike/ObservableLike.create";
import { dispatch } from "../../../scheduling/DispatcherLike";
import {
  dispose,
  isDisposed,
  toErrorHandler,
} from "../../../util/DisposableLike";

const IterableLike__toObservable: ToObservable<PromiseableLike>["toObservable"] =

    <T>() =>
    (promise: PromiseableLike<T>): ObservableLike<T> =>
      ObservableLike__create(observer => {
        const dispatcher = getDispatcher(observer);

        promise.then(next => {
          if (!isDisposed(dispatcher)) {
            pipe(dispatcher, dispatch(next), dispose());
          }
        }, toErrorHandler(dispatcher));
      });

export default IterableLike__toObservable;
