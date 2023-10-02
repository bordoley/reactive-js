import {
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../concurrent.js";
import {
  Equality,
  Factory,
  Reducer,
  invoke,
  pipe,
  returns,
} from "../../../functions.js";
import Observable_create from "./Observable.create.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import Observable_fromIterable from "./Observable.fromIterable.js";
import Observable_mergeWith from "./Observable.mergeWith.js";
import Observable_scan from "./Observable.scan.js";

const Observable_actionReducer =
  <TAction, T>(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ) =>
  (obs: ObservableLike<TAction>) =>
    Observable_create((observer: ObserverLike<T>) => {
      const acc = initialState();
      return pipe(
        obs,
        Observable_scan<TAction, T>(reducer, returns(acc)),
        Observable_mergeWith<T>(pipe([acc], Observable_fromIterable())),
        Observable_distinctUntilChanged<T>(options),
        invoke(ObservableLike_observe, observer),
      );
    });

export default Observable_actionReducer;
