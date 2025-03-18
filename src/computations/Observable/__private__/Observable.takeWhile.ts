import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike, SinkLike_complete } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const TakeWhileObserver_inclusive = Symbol("TakeWhileObserver_inclusive");
const TakeWhileObserver_predicate = Symbol("TakeWhileObserver_predicate");

interface TProperties<T> {
  [TakeWhileObserver_inclusive]: boolean;
  [TakeWhileObserver_predicate]: Predicate<T>;
}

const createTakeWhileObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
  inclusive?: boolean,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(LiftedObserverMixin()),
    function TakeWhileObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedEventListenerLike_notify> &
        TProperties<T>,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive?: boolean,
    ): ObserverLike<T> {
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[TakeWhileObserver_predicate] = predicate;
      this[TakeWhileObserver_inclusive] = inclusive ?? false;

      return this;
    },
    props<TProperties<T>>({
      [TakeWhileObserver_predicate]: none,
      [TakeWhileObserver_inclusive]: none,
    }),
    proto({
      [LiftedEventListenerLike_notify](
        this: TProperties<T> & LiftedObserverLike<T>,
        next: T,
      ) {
        const satisfiesPredicate = this[TakeWhileObserver_predicate](next);
        const isInclusive = this[TakeWhileObserver_inclusive];

        if (satisfiesPredicate || isInclusive) {
          this[LiftedEventListenerLike_notifyDelegate](next);
        }

        if (!satisfiesPredicate) {
          this[SinkLike_complete]();
        }
      },
    }),
  ))();

const Observable_takeWhile: Observable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    createTakeWhileObserver<T>,
    partial(predicate, options?.inclusive),
    Observable_liftPureDeferred,
  );

export default Observable_takeWhile;
