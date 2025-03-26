import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { BroadcasterLike } from "../../../computations.js";
import { bindMethod, none, partial, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  EventListenerLike,
} from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import {
  LiftedOperatorLike,
  LiftedOperatorLike_complete,
  LiftedOperatorLike_subscription,
} from "../../__internal__/LiftedSource.js";
import DelegatingLiftedOperatorMixin, {
  DelegatingLiftedOperatorLike,
  DelegatingLiftedOperatorLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedOperatorMixin.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

export const createTakeUntilOperator: <T>(
  delegate: LiftedOperatorLike<EventListenerLike, T>,
  notifier: BroadcasterLike,
) => LiftedOperatorLike<EventListenerLike, T> = /*@__PURE__*/ (<T>() => {
  const TakeUntilOperator_otherSubscription = Symbol(
    "TakeUntilOperator_otherSubscription",
  );

  type TProperties = {
    [TakeUntilOperator_otherSubscription]: DisposableLike;
  };

  return mixInstanceFactory(
    include(DelegatingLiftedOperatorMixin<EventListenerLike, T>()),
    function TakeUntilOperator(
      this: Pick<
        DelegatingLiftedOperatorLike<EventListenerLike, T>,
        typeof DelegatingLiftedOperatorLike_onCompleted
      > &
        TProperties,
      delegate: LiftedOperatorLike<EventListenerLike, T>,
      notifier: BroadcasterLike,
    ): LiftedOperatorLike<EventListenerLike, T> {
      init(
        DelegatingLiftedOperatorMixin<EventListenerLike, T>(),
        this,
        delegate,
      );

      const subscription = this[LiftedOperatorLike_subscription];
      this[TakeUntilOperator_otherSubscription] = pipe(
        notifier,
        Broadcaster_addEventHandler(
          bindMethod(this, LiftedOperatorLike_complete),
        ),
        Disposable.addTo(subscription),
      );

      return this;
    },
    props<TProperties>({
      [TakeUntilOperator_otherSubscription]: none,
    }),
    proto({
      [DelegatingLiftedOperatorLike_onCompleted](this: TProperties) {
        this[TakeUntilOperator_otherSubscription][DisposableLike_dispose]();
      },
    }),
  );
})();

const Broadcaster_takeUntil: Broadcaster.Signature["takeUntil"] = (<T>(
  notifier: BroadcasterLike,
) =>
  pipe(
    createTakeUntilOperator,
    partial(notifier),
    Broadcaster_lift<T, T>,
  )) as Broadcaster.Signature["takeUntil"];

export default Broadcaster_takeUntil;
