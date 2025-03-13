import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  ObserverLike,
  QueueableLike_complete,
  QueueableLike_enqueue,
} from "../../../utils.js";
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
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function TakeWhileObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify> &
        TProperties<T>,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive?: boolean,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
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
      [LiftedObserverLike_notify](
        this: TProperties<T> & LiftedObserverLike<T>,
        next: T,
      ) {
        const delegate = this[LiftedObserverLike_delegate];
        const satisfiesPredicate = this[TakeWhileObserver_predicate](next);
        const isInclusive = this[TakeWhileObserver_inclusive];

        if (satisfiesPredicate || isInclusive) {
          delegate[QueueableLike_enqueue](next);
        }

        if (!satisfiesPredicate) {
          this[QueueableLike_complete]();
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
