import { PromiseableLike } from "../containers";
import { pipe } from "../functions";
import { ObservableLike, ToObservable, createHotObservable } from "../rx";
import { dispatch } from "../scheduling/DispatcherLike";
import { getDispatcher } from "../scheduling/ObserverLike";
import { dispose, isDisposed, toErrorHandler } from "../util/DisposableLike";

export const toObservable: ToObservable<PromiseableLike>["toObservable"] =
  <T>() =>
  (promise: PromiseLike<T>): ObservableLike<T> =>
    createHotObservable(observer => {
      const dispatcher = getDispatcher(observer);

      promise.then(next => {
        if (!isDisposed(dispatcher)) {
          pipe(dispatcher, dispatch(next), dispose());
        }
      }, toErrorHandler(dispatcher));
    });

export const toObservableT: ToObservable<PromiseableLike> = { toObservable };
