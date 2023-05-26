import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import type * as EventSource from "../../EventSource.js";
import IndexedCollection_toEventSource from "../../IndexedCollection/__internal__/IndexedCollection.toEventSource.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  QueueLike,
  TakeLastLike,
  TakeLastLike_queue,
} from "../../__internal__/types.js";
import { invoke, none, partial, pipe } from "../../functions.js";
import {
  DisposableLike,
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventSourceLike_addEventListener,
  QueueableLike_enqueue,
  SinkLike_notify,
} from "../../types.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_takeLast: EventSource.Signature["takeLast"] =
  /*@__PURE__*/ (() => {
    const createTakeLastEventListener: <T>(
      delegate: EventListenerLike<T>,
      count: number,
    ) => EventListenerLike<T> = (<T>() =>
      createInstanceFactory(
        mix(
          include(Disposable_mixin, Delegating_mixin()),
          function TakeLastEventListener(
            instance: TakeLastLike<T> &
              Pick<
                EventListenerLike<T>,
                typeof EventListenerLike_isErrorSafe | typeof SinkLike_notify
              >,
            delegate: EventListenerLike<T>,
            takeLastCount: number,
          ): EventListenerLike<T> {
            init(Disposable_mixin, instance);

            instance[TakeLastLike_queue] = Queue_createIndexedQueue(
              takeLastCount,
              "drop-oldest",
            );

            pipe(
              instance,
              Disposable_addTo(delegate),
              Disposable_onComplete(() => {
                pipe(
                  instance[TakeLastLike_queue],
                  IndexedCollection_toEventSource<T>(),
                  invoke(EventSourceLike_addEventListener, delegate),
                );
              }),
            );

            return instance;
          },
          props<TakeLastLike<T>>({
            [TakeLastLike_queue]: none,
          }),
          {
            [EventListenerLike_isErrorSafe]: true,
            [SinkLike_notify](
              this: TakeLastLike<T> & DisposableLike & QueueLike<T>,
              next: T,
            ) {
              this[TakeLastLike_queue][QueueableLike_enqueue](next);
            },
          },
        ),
      ))();

    return <T>(options: { readonly count?: number } = {}) => {
      const count = clampPositiveInteger(options.count ?? 1);
      return pipe(
        createTakeLastEventListener<T>,
        partial(count),
        EventSource_lift,
      );
    };
  })();

export default EventSource_takeLast;
