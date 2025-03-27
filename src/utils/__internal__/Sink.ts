import {
  createInstanceFactory,
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../../computations/__internal__/LiftedSource.js";
import { Function1, Optional, none, returns } from "../../functions.js";
import {
  BackpressureStrategy,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  FlowControllerEnumeratorLike,
  FlowControllerQueueLike,
  FlowControllerQueueLike_enqueue,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin.js";

import DisposableMixin from "../__mixins__/DisposableMixin.js";
import FlowControlledQueueMixin from "../__mixins__/FlowControlledQueueMixin.js";

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: SinkLike<T>,
) => SinkLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(
    DelegatingNotifyOnlyNonCompletingNonDisposingSinkMixin(),
  ))();

export const createQueueSink: <T>(options?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => SinkLike<T> & FlowControllerEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, FlowControlledQueueMixin()),
    function ConsumerQueue(
      this: Omit<SinkLike<T>, keyof DisposableLike>,
      options: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): SinkLike<T> & FlowControllerQueueLike<T> {
      init(DisposableMixin, this);
      init(FlowControlledQueueMixin<T>(), this, options);

      return this;
    },
    props(),
    proto({
      get [SinkLike_isCompleted](): boolean {
        unsafeCast<SinkLike>(this);
        return this[DisposableLike_isDisposed];
      },

      [EventListenerLike_notify](this: FlowControllerQueueLike<T>, next: T) {
        this[FlowControllerQueueLike_enqueue](next);
      },

      [SinkLike_complete](this: SinkLike<T>) {
        this[DisposableLike_dispose]();
      },
    }),
  ))();

export const toLiftedSink: <T>() => Function1<
  SinkLike<T>,
  LiftedSinkLike<SinkLike<T>, T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [LiftedSinkLike_subscription]: SinkLike<T>;
  };

  type TPrototype = Pick<
    LiftedSinkLike<SinkLike<T>, T>,
    | typeof SinkLike_isCompleted
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
  >;

  return returns(
    mixInstanceFactory(
      include(DelegatingDisposableMixin),
      function SinktoLiftedSink(
        this: TPrototype & TProperties,
        listener: SinkLike<T>,
      ): LiftedSinkLike<SinkLike<T>, T> {
        init(DelegatingDisposableMixin, this, listener);
        this[LiftedSinkLike_subscription] = listener;
        return this;
      },
      props<TProperties>({
        [LiftedSinkLike_subscription]: none,
      }),
      proto<TPrototype>({
        get [SinkLike_isCompleted](): boolean {
          unsafeCast<TProperties>(this);
          return this[LiftedSinkLike_subscription][SinkLike_isCompleted];
        },

        [EventListenerLike_notify](this: TProperties, next: T) {
          this[LiftedSinkLike_subscription][EventListenerLike_notify](next);
        },

        [SinkLike_complete](this: TProperties) {
          this[LiftedSinkLike_subscription][SinkLike_complete]();
        },
      }),
    ),
  );
})();
