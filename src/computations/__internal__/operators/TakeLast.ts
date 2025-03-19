import {
  Mixin1,
  include,
  init,
  mix,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import {
  RunnableLike_eval,
  SourceLike_subscribe,
} from "../../../computations.js";
import { Optional, none, returns } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Queue from "../../../utils/Queue.js";
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import {
  LiftedListenerLike_delegate,
  LiftedListenerLike_notify,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import LiftedObserverMixin from "../../../utils/__mixins__/LiftedObserverMixin.js";
import LiftedSinkMixin, {
  LiftedSinkLike,
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  CollectionEnumeratorLike,
  CollectionEnumeratorLike_count,
  ConsumerLike,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  ObserverLike,
  QueueLike,
  QueueLike_enqueue,
  SinkLike,
} from "../../../utils.js";
import { Observable_gen } from "../../Observable/__private__/Observable.gen.js";
import { Producer_gen } from "../../Producer/__private__/Producer.gen.js";
import { Runnable_gen } from "../../Runnable/__private__/Runnable.gen.js";

export const LiftedTakeLastListenerLike_notifyLastAndComplete = Symbol(
  "LiftedTakeLastListenerLike_notifyLastAndComplete",
);
export const LiftedTakeLastListenerLike_lastValues = Symbol(
  "LiftedTakeLastListenerLike_lastValues",
);

export interface LiftedTakeLastSinkLike<
  T,
  TDelegateConsumer extends SinkLike<T> = SinkLike<T>,
> extends LiftedSinkLike<T, T, TDelegateConsumer> {
  readonly [LiftedTakeLastListenerLike_lastValues]: CollectionEnumeratorLike<T>;

  [LiftedTakeLastListenerLike_notifyLastAndComplete](): void;
}

const TakeLastMixin: <T>() => Mixin1<
  LiftedTakeLastSinkLike<T>,
  Optional<number>,
  Omit<LiftedTakeLastSinkLike<T>, typeof LiftedTakeLastListenerLike_lastValues>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [LiftedTakeLastListenerLike_lastValues]: QueueLike<T>;
  };

  return returns(
    mix<
      LiftedTakeLastSinkLike<T>,
      TProperties,
      Pick<
        LiftedTakeLastSinkLike<T>,
        typeof LiftedListenerLike_notify | typeof LiftedSinkLike_complete
      >,
      LiftedTakeLastSinkLike<T>,
      Optional<number>
    >(
      function TakeLastMixin(
        this: LiftedTakeLastSinkLike<T> & TProperties,
        takeLastCount: Optional<number>,
      ): LiftedTakeLastSinkLike<T> {
        const count = clampPositiveInteger(takeLastCount ?? 1);
        this[LiftedTakeLastListenerLike_lastValues] =
          Queue.createDropOldest<T>(count);

        return this;
      },
      props<TProperties>({
        [LiftedTakeLastListenerLike_lastValues]: none,
      }),
      {
        [LiftedListenerLike_notify](
          this: TProperties & LiftedSinkLike<T>,
          next: T,
        ) {
          this[LiftedTakeLastListenerLike_lastValues][QueueLike_enqueue](next);
        },
        [LiftedSinkLike_complete](
          this: TProperties & LiftedTakeLastSinkLike<T>,
        ) {
          const queue = this[LiftedTakeLastListenerLike_lastValues];
          const count = queue[CollectionEnumeratorLike_count];

          if (count === 0) {
            this[LiftedSinkLike_completeDelegate]();
          } else {
            this[LiftedTakeLastListenerLike_notifyLastAndComplete]();
          }
        },
      },
    ),
  );
})();

export const createSink: <T>(
  delegate: SinkLike<T>,
  takeCount: Optional<number>,
) => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedSinkMixin(), TakeLastMixin()),
    function TakeLastSink(
      this: Pick<
        LiftedTakeLastSinkLike<T>,
        typeof LiftedTakeLastListenerLike_notifyLastAndComplete
      >,
      delegate: SinkLike<T>,
      takeCount: Optional<number>,
    ): SinkLike<T> {
      init(LiftedSinkMixin<T>(), this, delegate);
      init(TakeLastMixin(), this, takeCount);

      return this;
    },
    props(),
    proto({
      [LiftedTakeLastListenerLike_notifyLastAndComplete](
        this: LiftedTakeLastSinkLike<T, SinkLike<T>>,
      ) {
        const enumerator = this[LiftedTakeLastListenerLike_lastValues];
        const runnable = Runnable_gen<T>(function* NotifyLast() {
          while (enumerator[EnumeratorLike_moveNext]()) {
            yield enumerator[EnumeratorLike_current];
          }
        });

        runnable[RunnableLike_eval](this[LiftedListenerLike_delegate]);
      },
    }),
  ))();

export const createConsumer: <T>(
  delegate: ConsumerLike<T>,
  takeCount: Optional<number>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedConsumerMixin(), TakeLastMixin()),
    function TakeLastConsumer(
      this: Pick<
        LiftedTakeLastSinkLike<T>,
        typeof LiftedTakeLastListenerLike_notifyLastAndComplete
      >,
      delegate: ConsumerLike<T>,
      takeCount: Optional<number>,
    ): ConsumerLike<T> {
      init(LiftedConsumerMixin<T>(), this, delegate);
      init(TakeLastMixin(), this, takeCount);

      return this;
    },
    props(),
    proto({
      [LiftedTakeLastListenerLike_notifyLastAndComplete](
        this: LiftedTakeLastSinkLike<T, ConsumerLike<T>>,
      ) {
        const enumerator = this[LiftedTakeLastListenerLike_lastValues];
        const obs = Producer_gen<T>(function* NotifyLast() {
          while (enumerator[EnumeratorLike_moveNext]()) {
            yield enumerator[EnumeratorLike_current];
          }
        });

        obs[SourceLike_subscribe](this[LiftedListenerLike_delegate]);
      },
    }),
  ))();

export const createObserver: <T>(
  delegate: ObserverLike<T>,
  takeCount: Optional<number>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin(), TakeLastMixin()),
    function TakeLastObserver(
      this: Pick<
        LiftedTakeLastSinkLike<T>,
        typeof LiftedTakeLastListenerLike_notifyLastAndComplete
      >,
      delegate: ObserverLike<T>,
      takeCount: Optional<number>,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, none);
      init(TakeLastMixin(), this, takeCount);

      return this;
    },
    props(),
    proto({
      [LiftedTakeLastListenerLike_notifyLastAndComplete](
        this: LiftedTakeLastSinkLike<T, ObserverLike<T>>,
      ) {
        const enumerator = this[LiftedTakeLastListenerLike_lastValues];
        const obs = Observable_gen<T>(function* NotifyLast() {
          while (enumerator[EnumeratorLike_moveNext]()) {
            yield enumerator[EnumeratorLike_current];
          }
        });

        obs[SourceLike_subscribe](this[LiftedListenerLike_delegate]);
      },
    }),
  ))();
