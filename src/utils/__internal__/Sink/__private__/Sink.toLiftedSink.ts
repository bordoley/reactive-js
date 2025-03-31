import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../../../__internal__/mixins.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../../../../computations/__internal__/LiftedSource.js";
import { Function1, none, returns } from "../../../../functions.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../../utils.js";
import DelegatingDisposableMixin from "../../../__mixins__/DelegatingDisposableMixin.js";

export const Sink_toLiftedSink: <T>() => Function1<
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
