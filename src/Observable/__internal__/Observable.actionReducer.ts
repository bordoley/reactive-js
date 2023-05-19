import { ObservableOperator } from "../../Observable.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  invoke,
  pipe,
  returns,
} from "../../functions.js";
import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../types.js";
import Observable_createWithConfig from "./Observable.createWithConfig.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import Observable_mergeWith from "./Observable.mergeWith.js";
import Observable_scan from "./Observable.scan.js";

const Observable_actionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): ObservableOperator<TAction, T> =>
  (obs =>
    Observable_createWithConfig((observer: ObserverLike<T>) => {
      const acc = initialState();
      return pipe(
        obs,
        Observable_scan<TAction, T>(reducer, returns(acc)),
        Observable_mergeWith<T>(pipe(acc, Optional_toObservable())),
        Observable_distinctUntilChanged<T>(options) as Function1<
          ObservableLike<T>,
          ObservableLike<T>
        >,
        invoke(ObservableLike_observe, observer),
      );
    }, obs)) as ObservableOperator<TAction, T>;

export default Observable_actionReducer;
