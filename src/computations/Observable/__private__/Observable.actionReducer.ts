import {
  ObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import {
  Equality,
  Factory,
  Reducer,
  invoke,
  pipe,
  returns,
} from "../../../functions.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import Observable_concat from "./Observable.concat.js";
import Observable_create from "./Observable.create.js";
import Observable_createPureDeferredObservable from "./Observable.createPureDeferredObservable.js";
import Observable_createPureSynchronousObservable from "./Observable.createPureSynchronousObservable.js";
import Observable_createSynchronousObservableWithSideEffects from "./Observable.createSynchronousObservableWithSideEffects.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import Observable_fromReadonlyArray from "./Observable.fromReadonlyArray.js";
import Observable_scan from "./Observable.scan.js";

const ObservableModule = {
  concat: Observable_concat,
  fromReadonlyArray: Observable_fromReadonlyArray,
};

const Observable_actionReducer: Observable.Signature["actionReducer"] = (<
    TAction,
    T,
  >(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ) =>
  (obs: ObservableLike<TAction>) => {
    const create = Computation.isPureSynchronous(obs)
      ? Observable_createPureSynchronousObservable
      : Computation.isSynchronousWithSideEffects(obs)
        ? Observable_createSynchronousObservableWithSideEffects
        : Computation.isPureDeferred(obs)
          ? Observable_createPureDeferredObservable
          : Observable_create;

    return create<T>(observer => {
      const acc: T = initialState();

      pipe(
        obs,
        Observable_scan<TAction, T>(reducer, returns(acc)),
        Computation.startWith(ObservableModule)<T>(acc),
        Observable_distinctUntilChanged<T>(options),
        invoke(ObservableLike_observe, observer),
      );
    });
  }) as Observable.Signature["actionReducer"];

export default Observable_actionReducer;
