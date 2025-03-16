import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedEventListenerMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPure from "./Observable.liftPure.js";

const KeepObserver_predicate = Symbol("KeepObserver_predicate");

interface TProperties<T> {
  [KeepObserver_predicate]: Predicate<T>;
}

const createKeepObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function KeepObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedEventListenerLike_notify> &
        TProperties<T>,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[KeepObserver_predicate] = predicate;

      return this;
    },
    props<TProperties<T>>({
      [KeepObserver_predicate]: none,
    }),
    proto({
      [LiftedEventListenerLike_notify](
        this: TProperties<T> & LiftedObserverLike<T>,
        next: T,
      ) {
        const shouldNotify = this[KeepObserver_predicate](next);

        if (shouldNotify) {
          this[LiftedEventListenerLike_notifyDelegate](next);
        }
      },
    }),
  ))();

const Observable_keep: Observable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => pipe(createKeepObserver<T>, partial(predicate), Observable_liftPure);

export default Observable_keep;
