import {
  Equality,
  Factory,
  Function2,
  Updater,
  compose,
  invoke,
  isTrue,
  pipe,
} from "../../../functions.js";
import { ObservableLike, ObservableLike_observe } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_endWith from "../../../rx/Observable/__internal__/Observable.endWith.js";
import Observable_exhaust from "../../../rx/Observable/__internal__/Observable.exhaust.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_ignoreElements from "../../../rx/Observable/__internal__/Observable.ignoreElements.js";
import Observable_mergeMap from "../../../rx/Observable/__internal__/Observable.mergeMap.js";
import Observable_pairwise from "../../../rx/Observable/__internal__/Observable.pairwise.js";
import Observable_startWith from "../../../rx/Observable/__internal__/Observable.startWith.js";
import Observable_stateStore from "../../../rx/Observable/__internal__/Observable.stateStore.js";
import Observable_switchMap from "../../../rx/Observable/__internal__/Observable.switchMap.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import Observable_zipWithLatestFrom from "../../../rx/Observable/__internal__/Observable.zipWithLatestFrom.js";
import Publisher_create from "../../../rx/Publisher/__internal__/Publisher.create.js";
import { StreamableLike } from "../../../streaming.js";
import {
  EventListenerLike_notify,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Streamable_create from "./Streamable.create.js";

interface CreateStatefulEventHandler {
  createStatefulEventHandler<TState>(
    op: Function2<TState, TState, ObservableLike<unknown>>,
    initialState: Factory<TState>,
    options: {
      readonly mode: "switching";
      readonly equality?: Equality<TState>;
    },
  ): StreamableLike<Updater<TState>, never>;
  createStatefulEventHandler<TState>(
    op: Function2<TState, TState, ObservableLike<unknown>>,
    initialState: Factory<TState>,
    options: {
      readonly mode: "blocking";
      readonly equality?: Equality<TState>;
    },
  ): StreamableLike<Updater<TState>, boolean>;
  createStatefulEventHandler<TState>(
    op: Function2<TState, TState, ObservableLike<unknown>>,
    initialState: Factory<TState>,
    options: {
      readonly mode: "queueing";
      readonly equality?: Equality<TState>;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamableLike<Updater<TState>, never>;
}

const Streamable_createStatefulEventHandler: CreateStatefulEventHandler["createStatefulEventHandler"] =
  (<TState>(
    op: Function2<TState, TState, ObservableLike<unknown>>,
    initialState: Factory<TState>,
    options: {
      readonly mode: "switching" | "blocking" | "queueing";
      readonly equality?: Equality<TState>;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamableLike<Updater<TState>, unknown> => {
    const { mode } = options;

    return Streamable_create<Updater<TState>, unknown>(
      compose(
        Observable_stateStore<TState>(initialState, options),

        mode === "blocking"
          ? (obs: ObservableLike<TState>) =>
              Observable_create(observer => {
                // The previous state that the event stream blocked on
                const publisher = pipe(
                  Publisher_create<TState>(),
                  Disposable_addTo(observer),
                );

                pipe(
                  publisher,
                  Observable_zipWithLatestFrom<TState, TState, ObservableLike>(
                    obs,
                    (prev, next) =>
                      pipe(
                        op(prev, next),
                        Observable_ignoreElements<ObservableLike, boolean>(),
                        Observable_startWith<ObservableLike, boolean>(true),
                        Observable_endWith<ObservableLike, boolean>(false),
                        Observable_takeWhile<ObservableLike, boolean>(isTrue),
                        Observable_forEach<ObservableLike, boolean>(_ =>
                          publisher[EventListenerLike_notify](next),
                        ),
                      ),
                  ),
                  Observable_exhaust(),
                  Observable_startWith<ObservableLike, boolean>(false),
                  invoke(ObservableLike_observe, observer),
                );
              })
          : compose(
              Observable_pairwise<ObservableLike, TState>(),
              mode === "switching"
                ? Observable_switchMap<readonly [TState, TState], never>(
                    ([prev, next]) =>
                      pipe(
                        op(prev, next),
                        Observable_ignoreElements<ObservableLike, never>(),
                      ),
                  )
                : Observable_mergeMap<readonly [TState, TState], never>(
                    ([prev, next]) =>
                      pipe(
                        op(prev, next),
                        Observable_ignoreElements<ObservableLike, never>(),
                      ),
                    { ...options, maxConcurrency: 1 },
                  ),
            ),
      ),
    );
  }) as CreateStatefulEventHandler["createStatefulEventHandler"];

export default Streamable_createStatefulEventHandler;
