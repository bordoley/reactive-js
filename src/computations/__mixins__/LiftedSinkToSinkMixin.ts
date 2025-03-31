import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingSinkMixin from "../../utils/__mixins__/DelegatingSinkMixin.js";
import { DisposableLike, SinkLike } from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin, {
  LiftedSinkToEventListenerLike,
} from "./LiftedSinkToEventListenerMixin.js";

export interface LiftedSinkToSinkLike<TSubscription extends SinkLike, T>
  extends LiftedSinkToEventListenerLike<TSubscription, T>,
    SinkLike<T> {}

type TReturn<TSubscription extends SinkLike, T> = Omit<
  LiftedSinkToSinkLike<TSubscription, T>,
  keyof DisposableLike
>;

const LiftedSinkToSinkMixin: <TSubscription extends SinkLike, T>() => Mixin1<
  TReturn<TSubscription, T>,
  LiftedSinkLike<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends SinkLike, T>() => {
  return returns(
    mix(
      include(DelegatingSinkMixin(), LiftedSinkToEventListenerMixin()),
      function LiftedSinkToSinkMixin(
        this: unknown,
        liftedSink: LiftedSinkLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        init(DelegatingSinkMixin(), this, liftedSink);
        init(
          LiftedSinkToEventListenerMixin<TSubscription, T>(),
          this,
          liftedSink,
        );

        return this;
      },
    ),
  );
})();

export default LiftedSinkToSinkMixin;
