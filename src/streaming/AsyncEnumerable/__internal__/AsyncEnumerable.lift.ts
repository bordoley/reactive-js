import {
  LiftedLike,
  LiftedLike_operators,
  LiftedLike_source,
} from "../../../__internal__/containers.js";
import { ContainerOperator } from "../../../containers.js";
import { Function1, bindMethod, newInstance, invoke, none, pipe, pipeUnsafe } from "../../../functions.js";
import {ObserverLike, ObservableLike, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import {
  AsyncEnumerableLike,
  StreamLike,
  StreamableLike,
  StreamableLike_stream,
} from "../../../streaming.js";
import {
  BufferLike_capacity,
  DisposableLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";

class LiftedAsyncEnumerable<T>
  implements
    AsyncEnumerableLike<T>,
    LiftedLike<AsyncEnumerableLike<T>, StreamLike<void, any> & DisposableLike>
{
  readonly [LiftedLike_source]: AsyncEnumerableLike<any>;
  readonly [LiftedLike_operators]: readonly Function1<
    StreamLike<void, any> & DisposableLike,
    StreamLike<void, any> & DisposableLike
  >[];

  readonly [ObservableLike_isEnumerable]: boolean;
  readonly [ObservableLike_isRunnable]: boolean;
  readonly [ObservableLike_observe]: ObservableLike[typeof ObservableLike_observe];

  constructor(
    src: AsyncEnumerableLike<any>,
    operators: readonly Function1<
      StreamLike<void, any> & DisposableLike,
      StreamLike<void, any> & DisposableLike
    >[],
    isEnumerable: boolean,
    isRunnable: boolean,
  ) {
    this[LiftedLike_source] = src;
    this[LiftedLike_operators] = operators;
    this[ObservableLike_isEnumerable] = isEnumerable;
    this[ObservableLike_isRunnable] = isRunnable;

    // FIXME: Code duplication
    const observable = Observable_create((observer: ObserverLike<T>) => {
      const capacity = observer[BufferLike_capacity];
      const backpressureStrategy =
        observer[QueueableLike_backpressureStrategy];
      const enumerator = pipe(
        this as StreamableLike<void, T>,
        invoke(StreamableLike_stream, observer, {
          backpressureStrategy,
          capacity,
        }),
        Disposable_addTo(observer),
      );

      pipe(
        enumerator,
        Observable_forEach<ObservableLike, T>(_ => {
          enumerator[QueueableLike_enqueue](none);
        }),
        invoke(ObservableLike_observe, observer),
      );

      enumerator[QueueableLike_enqueue](none);
    });

    this[ObservableLike_observe] = bindMethod(
      observable,
      ObservableLike_observe,
    );
  }

  [StreamableLike_stream](
    scheduler: SchedulerLike,
    options?: {
      readonly replay?: number;
      readonly backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy];
      readonly capacity?: number;
    },
  ): StreamLike<void, T> & DisposableLike {
    const src = this[LiftedLike_source][StreamableLike_stream](
      scheduler,
      options,
    );

    return pipeUnsafe(src, ...this[LiftedLike_operators]) as StreamLike<
      void,
      T
    > &
      DisposableLike;
  }
}

const AsyncEnumerable_lift =
  (isEnumerable: boolean, isRunnable: boolean) =>
  <TA, TB>(
    operator: Function1<
      StreamLike<void, TA> & DisposableLike,
      StreamLike<void, TB> & DisposableLike
    >,
  ): ContainerOperator<AsyncEnumerableLike, TA, TB> =>
  enumerable => {
    const src = (enumerable as any)[LiftedLike_source] ?? enumerable;
    const allFunctions = [
      ...((enumerable as any)[LiftedLike_operators] ?? []),
      operator,
    ];

    const liftedIsEnumerable =
      isEnumerable && enumerable[ObservableLike_isEnumerable];
    const liftIsRunnable = isRunnable && enumerable[ObservableLike_isRunnable];

    return newInstance<
      LiftedAsyncEnumerable<TB>,
      AsyncEnumerableLike<any>,
      readonly Function1<
        StreamLike<void, any> & DisposableLike,
        StreamLike<void, any> & DisposableLike
      >[],
      boolean,
      boolean
    >(
      LiftedAsyncEnumerable,
      src,
      allFunctions,
      liftedIsEnumerable,
      liftIsRunnable,
    );
  };

export default AsyncEnumerable_lift;
