import {
  Equality,
  Factory,
  Function2,
  Updater,
  compose,
  isFunction,
  pipe,
} from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import Observable_pairwise from "../../../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_stateStore from "../../../rx/Observable/__internal__/Observable.stateStore.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import {
  StreamableLike,
  StreamableLike_isEnumerable,
  StreamableLike_isInteractive,
  StreamableLike_isRunnable,
} from "../../../streaming.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Streamable_create from "./Streamable.create.js";
import Streamable_createWithConfig from "./Streamable.createWithConfig.js";

interface StreamableCreateStateStore {
  createStateStore<T>(
    initialState: Factory<T>,
    onChange: Function2<T, T, ObservableLike<unknown>>,
    options: {
      readonly mode: "switching";
      readonly equality?: Equality<T>;
    },
  ): StreamableLike<Updater<T>, T>;

  createStateStore<T>(
    initialState: Factory<T>,
    onChange: Function2<T, T, ObservableLike<unknown>>,
    options: {
      readonly mode: "queueing";
      readonly equality?: Equality<T>;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamableLike<Updater<T>, T>;

  createStateStore<T>(
    initialState: Factory<T>,
    options?: { readonly equality?: Equality<T> },
  ): StreamableLike<Updater<T>, T>;
}

const Streamable_createStateStore: StreamableCreateStateStore["createStateStore"] =
  (<T>(
    initialState: Factory<T>,
    onChangeOrOptions?:
      | Function2<T, T, ObservableLike<unknown>>
      | {
          readonly equality?: Equality<T>;
        },
    options: {
      readonly mode?: "queueing" | "switching";
      readonly equality?: Equality<T>;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    } = {},
  ): StreamableLike<Updater<T>, T> =>
    isFunction(onChangeOrOptions)
      ? Streamable_create<Updater<T>, T>(
          compose(
            Observable_stateStore(initialState, options),
            Observable_pairwise<ObservableLike, T>(),
            options?.mode === "switching"
              ? Observable_switchMap<readonly [T, T], T>(([prev, next]) =>
                  pipe(
                    onChangeOrOptions(prev, next),
                    Observable_endWith<ObservableLike, T>(next),
                  ),
                )
              : Observable_mergeMap<readonly [T, T], never>(
                  ([prev, next]) =>
                    pipe(
                      onChangeOrOptions(prev, next),
                      Observable_endWith<ObservableLike, T>(next),
                    ),
                  { ...options, concurrency: 1 },
                ),
          ),
        )
      : Streamable_createWithConfig<Updater<T>, T>(
          Observable_stateStore(initialState, options),
          {
            [StreamableLike_isEnumerable]: true,
            [StreamableLike_isInteractive]: true,
            [StreamableLike_isRunnable]: true,
          },
        )) as StreamableCreateStateStore["createStateStore"];

export default Streamable_createStateStore;
