import { PromiseableLike } from "../../../containers";
import { pipe } from "../../../functions";
import { ObservableLike, ToObservable } from "../../../rx";
import Observable$create from "../../../rx/__internal__/Observable/Observable.create";
import Observer$getDispatcher from "../../../rx/__internal__/Observer/Observer.getDispatcher";
import Dispatcher$dispatch from "../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$toErrorHandler from "../../../util/__internal__/Disposable/Disposable.toErrorHandler";

const Promiseable$toObservable: ToObservable<PromiseableLike>["toObservable"] =
  <T>() =>
  (promise: PromiseableLike<T>): ObservableLike<T> =>
    Observable$create(observer => {
      const dispatcher = Observer$getDispatcher(observer);

      promise.then(next => {
        if (!Disposable$isDisposed(dispatcher)) {
          pipe(dispatcher, Dispatcher$dispatch(next), Disposable$dispose());
        }
      }, Disposable$toErrorHandler(dispatcher));
    });

export default Promiseable$toObservable;
