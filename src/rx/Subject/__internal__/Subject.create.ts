import { max } from "../../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { newInstance, none, pipe, unsafeCast } from "../../../functions.js";
import {
  MulticastObservableLike_observerCount,
  MulticastObservableLike_replay,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  SubjectLike,
  SubjectLike_publish,
} from "../../../rx.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/PullableQueue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";
import {
  IndexedQueueLike,
  IndexedQueueLike_get,
  PullableQueueLike,
  PullableQueueLike_pull,
} from "../../../util/__internal__/util.internal.js";
import Observer_getDispatcher from "../../Observer/__internal__/Observer.getDispatcher.js";

const Subject_create: <T>(options?: { replay?: number }) => SubjectLike<T> =
  /*@__PURE__*/ (<T>() => {
    const Subject_observers = Symbol("Subject_observers");

    type TProperties = {
      readonly [MulticastObservableLike_replay]: number;
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
          init(IndexedQueue_fifoQueueMixin<T>(), instance);

          instance[MulticastObservableLike_replay] = replay;
          instance[Subject_observers] = newInstance<Set<ObserverLike>>(Set);

          return instance;
        },
        props<TProperties>({
          [MulticastObservableLike_replay]: 0,
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
            this: TProperties & SubjectLike<T> & PullableQueueLike<T>,
            next: T,
          ) {
            if (!Disposable_isDisposed(this)) {
              const replay = this[MulticastObservableLike_replay];

              if (replay > 0) {
                this[QueueLike_push](next);
                if (this[QueueLike_count] > replay) {
                  this[PullableQueueLike_pull]();
                }
              }

              for (const observer of this[Subject_observers]) {
                pipe(observer, Observer_getDispatcher, Queue_push(next));
              }
            }
          },

          [ObservableLike_observe](
            this: TProperties & SubjectLike & IndexedQueueLike<T>,
            observer: ObserverLike<T>,
          ) {
            if (!Disposable_isDisposed(this)) {
              const { [Subject_observers]: observers } = this;
              observers.add(observer);

              pipe(
                observer,
                Disposable_onDisposed(_ => {
                  observers.delete(observer);
                }),
              );
            }

            const dispatcher = Observer_getDispatcher(observer);

            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            const count = this[QueueLike_count];
            for (let i = 0; i < count; i++) {
              const next = this[IndexedQueueLike_get](i);
              pipe(dispatcher, Queue_push(next));
            }

            pipe(this, Disposable_addIgnoringChildErrors(dispatcher));
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
