import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import {
  Equality,
  Factory,
  Reducer,
  pipe,
  returns,
} from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_distinctUntilChanged from "../../../rx/Observable/__internal__/Observable.distinctUntilChanged.js";
import Observable_mergeWith from "../../../rx/Observable/__internal__/Observable.mergeWith.js";
import Observable_observeWith from "../../../rx/Observable/__internal__/Observable.observeWith.js";
import Observable_scan from "../../../rx/Observable/__internal__/Observable.scan.js";
import { StreamableLike } from "../../../streaming.js";
import Streamable_createLifted from "./Streamable.createLifted.js";

const Streamable_createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  Streamable_createLifted<TAction, T>(
    obs =>
      Observable_create(observer => {
        const acc = initialState();
        pipe(
          obs,
          Observable_scan<ObservableLike, TAction, T>(reducer, returns(acc)),
          Observable_mergeWith<T>(pipe(acc, Optional_toObservable())),
          Observable_distinctUntilChanged<T>(options),
          Observable_observeWith(observer),
        );
      }),
    true,
    false,
    false,
  );

export default Streamable_createActionReducer;
