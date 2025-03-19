import { ComputationOf, SourceLike_subscribe } from "../../../computations.js";
import {
  Equality,
  Factory,
  Reducer,
  invoke,
  pipe,
  returns,
} from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../__internal__/Source.js";
import Observable_concat from "./Observable.concat.js";
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
  (obs: ComputationOf<Observable.Computation, TAction>) => {
    return Source.create<T, ObserverLike<T>>(observer => {
      const acc: T = initialState();

      pipe(
        obs,
        Observable_scan<TAction, T>(reducer, returns(acc)),
        Computation.startWith(ObservableModule)<T>(acc),
        Observable_distinctUntilChanged<T>(options),
        invoke(SourceLike_subscribe, observer),
      );
    }, obs);
  }) as Observable.Signature["actionReducer"];

export default Observable_actionReducer;
