import { max } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  IndexedQueueLike,
  IndexedQueueLike_get,
  QueueLike,
  QueueLike_count,
  QueueLike_pull,
} from "../../../__internal__/util.internal.js";
import { newInstance, none, pipe, unsafeCast } from "../../../functions.js";
import {
  DispatcherLike_complete,
  MulticastObservableLike_observerCount,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  SubjectLike,
  SubjectLike_publish,
} from "../../../rx.js";
import {
  DisposableLike_isDisposed,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Disposable_onError from "../../../util/Disposable/__internal__/Disposable.onError.js";
import Disposable_toErrorHandler from "../../../util/Disposable/__internal__/Disposable.toErrorHandler.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";

const Subject_create: <T>(options?: { replay?: number }) => SubjectLike<T> =
  /*@__PURE__*/ (<T>() => {
    const Subject_observers = Symbol("Subject_observers");

    type TProperties = {
      readonly [Subject_observers]: Set<ObserverLike<T>>;
    };

    const createSubjectInstance = createInstanceFactory(
      mix(
        include(Disposable_mixin, IndexedQueue_fifoQueueMixin()),
        function Subject(
          instance: Pick<
            SubjectLike<T>,
            | typeof ObservableLike_observe
            | typeof ObservableLike_isEnumerable
            | typeof ObservableLike_isRunnable
            | typeof MulticastObservableLike_observerCount
            | typeof SubjectLike_publish
          > &
            Mutable<TProperties>,
          replay: number,
        ): SubjectLike<T> {
          init(Disposable_mixin, instance);
          init(IndexedQueue_fifoQueueMixin<T>(), instance, replay);

          instance[Subject_observers] = newInstance<Set<ObserverLike>>(Set);

          return instance;
        },
        props<TProperties>({
          [Subject_observers]: none,
        }),
        {
          [ObservableLike_isEnumerable]: false,
          [ObservableLike_isRunnable]: false,

          get [MulticastObservableLike_observerCount]() {
            unsafeCast<TProperties>(this);
            return this[Subject_observers].size;
          },

          [SubjectLike_publish](
            this: TProperties & SubjectLike<T> & QueueLike<T>,
            next: T,
          ) {
            if (this[DisposableLike_isDisposed]) {
              return;
            }

            const replay = this[QueueableLike_maxBufferSize];

            if (replay > 0 && !this[QueueableLike_push](next)) {
              this[QueueLike_pull]();
            }

            for (const observer of this[Subject_observers]) {
              observer[QueueableLike_push](next);
            }
          },

          [ObservableLike_observe](
            this: TProperties & SubjectLike & IndexedQueueLike<T>,
            observer: ObserverLike<T>,
          ) {
            if (!this[DisposableLike_isDisposed]) {
              const { [Subject_observers]: observers } = this;
              observers.add(observer);

              pipe(
                observer,
                Disposable_onDisposed(_ => {
                  observers.delete(observer);
                }),
              );
            }

            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            const count = this[QueueLike_count];
            for (let i = 0; i < count; i++) {
              const next = this[IndexedQueueLike_get](i);
              observer[QueueableLike_push](next);
            }

            pipe(
              this,
              Disposable_onError(Disposable_toErrorHandler(observer)),
              Disposable_onComplete(() => {
                observer[DispatcherLike_complete]();
              }),
            );
          },
        },
      ),
    );

    return (options?: { replay?: number }): SubjectLike<T> => {
      const { replay: replayOption = 0 } = options ?? {};
      const replay = max(replayOption, 0);

      return createSubjectInstance(replay);
    };
  })();

export default Subject_create;
