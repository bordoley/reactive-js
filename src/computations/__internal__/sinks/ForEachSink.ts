import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { SideEffect1, none } from "../../../functions.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import { EventListenerLike_notify, SinkLike } from "../../../utils.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import { LiftedSinkLike } from "../LiftedSource.js";

export const create: <TSubscription extends SinkLike, T>(
  delegate: LiftedSinkLike<TSubscription, T>,
  sideEffect: SideEffect1<T>,
) => LiftedSinkLike<TSubscription, T> = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  T,
>() => {
  const ForEachSink_effect = Symbol("ForEachSink_effect");

  type TProperties = {
    [ForEachSink_effect]: SideEffect1<T>;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<TSubscription, T>()),
    function ForEachSink(
      this: Pick<
        DelegatingLiftedSinkLike<TSubscription, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<TSubscription, T>,
      effect: SideEffect1<T>,
    ): LiftedSinkLike<TSubscription, T> {
      init(DelegatingLiftedSinkMixin<TSubscription, T>(), this, delegate);
      this[ForEachSink_effect] = effect;

      return this;
    },
    props<TProperties>({
      [ForEachSink_effect]: none,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<TSubscription, T>,
        next: T,
      ) {
        this[ForEachSink_effect](next);

        this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](
          next,
        );
      },
    }),
  );
})();
