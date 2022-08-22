import { createLiftedStreamable } from "../__internal__/streaming/__internal__StreamableLike";
import { concatWith, ignoreElements } from "../containers/ContainerLike";
import { toObservable } from "../containers/ReadonlyArrayLike";
import {
  Equality,
  Factory,
  Function1,
  Reducer,
  Updater,
  pipe,
  returns,
  updateReducer,
} from "../functions";
import {
  create as createObservable,
  distinctUntilChanged,
  forEach,
  keepT,
  merge,
  mergeT,
  onSubscribe,
  scan,
  subscribe,
} from "../rx/ObservableLike";
import { sinkInto as sinkIntoRx } from "../rx/ReactiveContainerLike";
import { DispatcherLike_scheduler, SchedulerLike } from "../scheduling";
import { dispatchTo } from "../scheduling/DispatcherLike";
import {
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming";
import { add, addTo } from "../util/DisposableLike";

export const stream =
  <TReq, T, TStream extends StreamLike<TReq, T>>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<StreamableLike<TReq, T, TStream>, TStream> =>
  streamable =>
    streamable[StreamableLike_stream](scheduler, options);

export const sinkInto =
  <TReq, T, TSinkStream extends StreamLike<T, TReq>>(dest: TSinkStream) =>
  (src: StreamableLike<TReq, T>): StreamableLike<TReq, T> => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, stream(scheduler));

    pipe(
      merge(
        pipe(
          srcStream,
          forEach(dispatchTo(dest)),
          ignoreElements(keepT),
          onSubscribe(() => dest),
        ),
        pipe(dest, forEach<TReq>(dispatchTo(srcStream)), ignoreElements(keepT)),
      ),
      ignoreElements(keepT),
      subscribe(scheduler),
      addTo(dest),
      add(srcStream),
    );

    return src;
  };

/**
 * Returns a new `StreamableLike` instance that applies an accumulator function
 * over the notified actions, emitting each intermediate result.
 *
 * @param reducer The accumulator function called on each notified action.
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createActionReducer = <TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<TAction, T> =>
  createLiftedStreamable(obs =>
    createObservable(observer => {
      const acc = initialState();
      pipe(
        obs,
        scan<TAction, T>(reducer, returns(acc)),
        concatWith(mergeT, pipe([acc], toObservable())),
        distinctUntilChanged<T>(options),
        sinkIntoRx(observer),
      );
    }),
  );

/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
export const createStateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): StreamableLike<Updater<T>, T> =>
  createActionReducer(updateReducer, initialState, options);
