import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import { LiftedSinkLike } from "../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin, {
  LiftedSinkToEventListenerLike,
  LiftedSinkToEventListenerLike_liftedSink,
} from "./LiftedSinkToEventListenerMixin.js";

export interface LiftedSinkToSinkLike<TSubscription extends SinkLike, T>
  extends LiftedSinkToEventListenerLike<TSubscription, T>,
    SinkLike<T> {}

type TReturn<TSubscription extends SinkLike, T> = LiftedSinkToSinkLike<
  TSubscription,
  T
>;

type TPrototype<TSubscription extends SinkLike, T> = Pick<
  LiftedSinkToSinkLike<TSubscription, T>,
  typeof SinkLike_complete | typeof SinkLike_isCompleted
>;

const LiftedSinkToSinkMixin: <TSubscription extends SinkLike, T>() => Mixin1<
  TReturn<TSubscription, T>,
  LiftedSinkLike<TSubscription, T>,
  TPrototype<TSubscription, T>
> = /*@__PURE__*/ (<TSubscription extends SinkLike<T>, T>() => {
  const LiftedSinkToSinkMixin_isCompleted = Symbol(
    "LiftedSinkToSinkMixin_isCompleted",
  );

  type TProperties = {
    [LiftedSinkToSinkMixin_isCompleted]: boolean;
  };

  return returns(
    mix(
      include(LiftedSinkToEventListenerMixin()),
      function LiftedSinkToSinkMixin(
        this: TPrototype<TSubscription, T>,
        delegate: LiftedSinkLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        init(
          LiftedSinkToEventListenerMixin<TSubscription, T>(),
          this,
          delegate,
        );
        return this;
      },
      props<TProperties>({
        [LiftedSinkToSinkMixin_isCompleted]: false,
      }),
      proto({
        get [SinkLike_isCompleted]() {
          unsafeCast<LiftedSinkToSinkLike<TSubscription, T> & TProperties>(
            this,
          );
          return (
            this[LiftedSinkToSinkMixin_isCompleted] ||
            this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_isCompleted]
          );
        },

        [SinkLike_complete](
          this: LiftedSinkToSinkLike<TSubscription, T> & TProperties,
        ) {
          const isCompleted = this[LiftedSinkToSinkMixin_isCompleted];
          this[LiftedSinkToSinkMixin_isCompleted] = true;
          if (isCompleted) {
            return;
          }

          this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default LiftedSinkToSinkMixin;
