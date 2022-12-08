import { createObservable } from "../__internal__/rx/ObservableLike.create";
import { PromiseableLike } from "../containers";
import { pipe } from "../functions";
import { ObservableLike, ToObservable } from "../rx";
import { getDispatcher } from "../rx/ObserverLike";
import { dispatch } from "../scheduling/DispatcherLike";
import { dispose, isDisposed, toErrorHandler } from "../util/DisposableLike";

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  <T>() =>
  (promise: PromiseableLike<T>): ObservableLike<T> =>
    createObservable(observer => {
      const dispatcher = getDispatcher(observer);

      promise.then(next => {
        if (!isDisposed(dispatcher)) {
          pipe(dispatcher, dispatch(next), dispose());
        }
      }, toErrorHandler(dispatcher));
    });

export const toObservableT: ToObservable<PromiseableLike> = { toObservable };
