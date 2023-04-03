import { Equality, Factory, Reducer } from "../../../functions.js";
import Observable_actionReducer from "../../../rx/Observable/__internal__/Observable.actionReducer.js";
import { StreamableLike } from "../../../streaming.js";
import Streamable_createLifted from "./Streamable.createLifted.js";

const Streamable_createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  Streamable_createLifted<TAction, T>(
    Observable_actionReducer(reducer, initialState, options),
    true,
    true,
    true,
  );

export default Streamable_createActionReducer;
