import { PromiseableLike } from "../../../containers";
import { pipe } from "../../../functions";
import { ObservableLike, ToObservable } from "../../../rx";
import Observable_create from "../../../rx/__internal__/Observable/Observable.create";
import Observer_getDispatcher from "../../../rx/__internal__/Observer/Observer.getDispatcher";
import Dispatcher_dispatch from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_toErrorHandler from "../../../util/__internal__/Disposable/Disposable.toErrorHandler";

const Promiseable_toObservable: ToObservable<PromiseableLike>["toObservable"] =
  <T>() =>
  (promise: PromiseableLike<T>): ObservableLike<T> =>
    Observable_create(observer => {
      const dispatcher = Observer_getDispatcher(observer);

      promise.then(next => {
        if (!Disposable_isDisposed(dispatcher)) {
          pipe(dispatcher, Dispatcher_dispatch(next), Disposable_dispose());
        }
      }, Disposable_toErrorHandler(dispatcher));
    });

export default Promiseable_toObservable;
