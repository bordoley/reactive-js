import { Equality, Factory, Function1, Reducer, Updater } from "../functions";
import { SchedulerLike } from "../scheduling";
import { StreamLike, StreamableLike } from "../streaming";

import Streamable$createActionReducer from "./__internal__/Streamable/Streamable.createActionReducer";
import Streamable$createStateStore from "./__internal__/Streamable/Streamable.createStateStore";
import Streamable$sinkInto from "./__internal__/Streamable/Streamable.sinkInto";
import Streamable$stream from "./__internal__/Streamable/Streamable.stream";

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createActionReducer: <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
) => StreamableLike<TAction, T> = Streamable$createActionReducer;

/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createStateStore: <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
) => StreamableLike<Updater<T>, T> = Streamable$createStateStore;

export const sinkInto: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(
  dest: TSinkStream,
) => (src: StreamableLike<TReq, T>) => StreamableLike<TReq, T> =
  Streamable$sinkInto;

export const stream: <TReq, T, TStream extends StreamLike<TReq, T>>(
  scheduler: SchedulerLike,
  options?: { readonly replay?: number },
) => Function1<StreamableLike<TReq, T, TStream>, TStream> = Streamable$stream;
