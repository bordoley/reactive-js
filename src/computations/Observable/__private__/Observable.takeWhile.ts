import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import Observer_assertObserverState from "../../../utils/Observer/__internal__/Observer.assertObserverState.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../../utils/__mixins__/ObserverMixin.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  ObserverLike_notify,
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
    include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()),
    function TakeWhileObserver(
      this: Pick<ObserverLike<T>, typeof ObserverLike_notify> & TProperties<T>,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive?: boolean,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[TakeWhileObserver_predicate] = predicate;
      this[TakeWhileObserver_inclusive] = inclusive ?? false;

      return this;
    },
    props<TProperties<T>>({
      [TakeWhileObserver_predicate]: none,
      [TakeWhileObserver_inclusive]: none,
    }),
    proto({
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties<T> & LiftedObserverLike<T>,
        next: T,
      ) {
        const satisfiesPredicate = this[TakeWhileObserver_predicate](next);

        if (satisfiesPredicate || this[TakeWhileObserver_inclusive]) {
          this[LiftedObserverLike_delegate][ObserverLike_notify](next);
        }

        if (!satisfiesPredicate) {
          this[DisposableLike_dispose]();
        }
      }),
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
