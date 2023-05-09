import { Containers, DeferredObservableContainer } from "../../../core.js";
import {
  Equality,
  Factory,
  Reducer,
  pipe,
  returns,
} from "../../../functions.js";
import Observable_distinctUntilChanged from "../../Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_mergeWith from "../../Observable/__internal__/Observable.mergeWith.js";
import Observable_scan from "../../Observable/__internal__/Observable.scan.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import DeferredObservable_defer from "./DeferredObservable.defer.js";

const DeferredObservable_actionReducer =
  <TAction, T>(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ): Containers.Operator<DeferredObservableContainer, TAction, T> =>
  obs =>
    DeferredObservable_defer(() => {
      const acc = initialState();
      return pipe(
        obs,
        Observable_scan<DeferredObservableContainer, TAction, T>(
          reducer,
          returns(acc),
        ),
        Observable_mergeWith<DeferredObservableContainer, T>(
          pipe(acc, Optional_toObservable()),
        ),
        Observable_distinctUntilChanged<DeferredObservableContainer, T>(
          options,
        ),
      );
    });

export default DeferredObservable_actionReducer;
