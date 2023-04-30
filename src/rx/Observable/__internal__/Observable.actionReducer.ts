import { ContainerOperator } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import {
  Equality,
  Factory,
  Reducer,
  pipe,
  returns,
} from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
import Observable_defer from "./Observable.defer.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import Observable_mergeWith from "./Observable.mergeWith.js";
import Observable_scan from "./Observable.scan.js";

const Observable_actionReducer =
  <TAction, T>(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ): ContainerOperator<ObservableContainer, TAction, T> =>
  obs =>
    Observable_defer(() => {
      const acc = initialState();
      return pipe(
        obs,
        Observable_scan<ObservableContainer, TAction, T>(reducer, returns(acc)),
        Observable_mergeWith<ObservableContainer, T>(
          pipe(acc, Optional_toObservable()),
        ),
        Observable_distinctUntilChanged<ObservableContainer, T>(options),
      );
    });

export default Observable_actionReducer;
