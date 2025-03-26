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
  LiftedSinkToEventListenerLike_operator,
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
> = /*@__PURE__*/ (<TSubscription extends SinkLike, T>() => {
  return returns(
    mix(
      include(LiftedSinkToEventListenerMixin()),
      function LiftedSinkToSinkMixin(
        this: TPrototype<TSubscription, T>,
        operator: LiftedSinkLike<TSubscription, T>,
      ): TReturn<TSubscription, T> {
        init(
          LiftedSinkToEventListenerMixin<TSubscription, T>(),
          this,
          operator,
        );

        return this;
      },
      props(),
      proto<TPrototype<TSubscription, T>>({
        get [SinkLike_isCompleted]() {
          unsafeCast<LiftedSinkToSinkLike<TSubscription, T>>(this);
          return this[LiftedSinkToEventListenerLike_operator][
            SinkLike_isCompleted
          ];
        },
        [SinkLike_complete](this: LiftedSinkToSinkLike<TSubscription, T>) {
          this[LiftedSinkToEventListenerLike_operator][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default LiftedSinkToSinkMixin;
