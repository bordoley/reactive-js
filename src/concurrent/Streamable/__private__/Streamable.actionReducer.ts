import * as Computation from "../../../computations/Computation.js";
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
import * as Observable from "../../Observable.js";
import type * as Streamable from "../../Streamable.js";
import Streamable_create from "./Streamable.create.js";

const ObservableModule = { merge: Observable.merge };

const Observable_actionReducer =
  <TAction, T>(
    reducer: Reducer<TAction, T>,
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ) =>
  (obs: ObservableLike<TAction>) =>
    Observable.create((observer: ObserverLike<T>) => {
      const acc = initialState();
      return pipe(
        obs,
        Observable.scan<TAction, T>(reducer, returns(acc)),
        Computation.mergeWith(ObservableModule)(
          pipe(acc, Observable.fromValue()),
        ),
        Observable.distinctUntilChanged<T>(options),
        invoke(ObservableLike_observe, observer),
      );
    });

const Streamable_actionReducer: Streamable.Signature["actionReducer"] = <
  TAction,
  T,
>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
) =>
  Streamable_create<TAction, T>(
    Observable_actionReducer<TAction, T>(reducer, initialState, options),
  );

export default Streamable_actionReducer;
