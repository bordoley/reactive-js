import { Equality, Factory, Reducer } from "../../../functions.js";
import Observable_actionReducer from "../../../rx/Observable/__internal__/Observable.actionReducer.js";
import {
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
} from "../../../streaming.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";

const Streamable_createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  Streamable_createWithConfig<TAction, T>(
    Observable_actionReducer(reducer, initialState, options),
    {
      [StreamableLike_isEnumerable]: true,
      [StreamableLike_isInteractive]: true,
      [StreamableLike_isRunnable]: true,
    },
  );

export default Streamable_createActionReducer;
