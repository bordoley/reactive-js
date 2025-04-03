import { Mixin1, mix, props, proto } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import {
  SinkMixinLike,
  SinkMixinLike_doComplete,
  SinkMixinLike_doNotify,
} from "../../utils/__mixins__/SinkMixin.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
} from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import {
  LiftedSinkToEventListenerLike,
  LiftedSinkToEventListenerLike_liftedSink,
} from "./LiftedSinkToEventListenerMixin.js";

type TReturn<TSubscription extends SinkLike, T> = Pick<
  SinkMixinLike<TSubscription, T>,
  typeof SinkMixinLike_doNotify | typeof SinkMixinLike_doComplete
>;

const LiftedSinkToSinkMixin: <TSubscription extends SinkLike, T>() => Mixin1<
  TReturn<TSubscription, T>,
  LiftedSinkLike<TSubscription, T>,
  {},
  LiftedSinkToEventListenerLike<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends SinkLike<T>, T>() => {
  return returns(
    mix<
      TReturn<TSubscription, T>,
      unknown,
      TReturn<TSubscription, T>,
      LiftedSinkToEventListenerLike<TSubscription, T>
    >(
      function LiftedSinkToSinkMixin(
        this: TReturn<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        return this;
      },
      props(),
      proto({
        [SinkMixinLike_doNotify](
          this: LiftedSinkToEventListenerLike<TSubscription, T>,
          next: T,
        ) {
          this[LiftedSinkToEventListenerLike_liftedSink][
            EventListenerLike_notify
          ](next);
        },

        [SinkMixinLike_doComplete](
          this: LiftedSinkToEventListenerLike<TSubscription, T>,
        ) {
          this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default LiftedSinkToSinkMixin;
