import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
  SinkLike,
} from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";

export const LiftedSinkToEventListenerLike_liftedSink = Symbol(
  "LiftedSinkToEventListenerLike_liftedSink",
);

export interface LiftedSinkToEventListenerLike<
  TSubscription extends SinkLike,
  T,
> extends EventListenerLike<T> {
  readonly [LiftedSinkToEventListenerLike_liftedSink]: LiftedSinkLike<
    TSubscription,
    T
  >;
}

type TReturn<TSubscription extends SinkLike, T> = LiftedSinkToEventListenerLike<
  TSubscription,
  T
>;

type TPrototype<TSubscription extends SinkLike, T> = Pick<
  LiftedSinkToEventListenerLike<TSubscription, T>,
  typeof EventListenerLike_notify
>;

const LiftedSinkToEventListenerMixin: <
  TSubscription extends SinkLike,
  T,
>() => Mixin1<
  TReturn<TSubscription, T>,
  LiftedSinkLike<TSubscription, T>,
  TPrototype<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends SinkLike, T>() => {
  type TProperties = {
    [LiftedSinkToEventListenerLike_liftedSink]: LiftedSinkLike<
      TSubscription,
      T
    >;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin),
      function LiftedSinkToEventListenerMixin(
        this: TProperties & TPrototype<TSubscription, T>,
        delegate: LiftedSinkLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        init(DelegatingDisposableMixin, this, delegate);
        this[LiftedSinkToEventListenerLike_liftedSink] = delegate;

        return this;
      },
      props<TProperties>({
        [LiftedSinkToEventListenerLike_liftedSink]: none,
      }),
      proto<TPrototype<TSubscription, T>>({
        [EventListenerLike_notify](this: TProperties, next: T) {
          this[LiftedSinkToEventListenerLike_liftedSink][
            EventListenerLike_notify
          ](next);
        },
      }),
    ),
  );
})();

export default LiftedSinkToEventListenerMixin;
