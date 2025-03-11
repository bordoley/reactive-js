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
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "../../../utils/__mixins__/ObserverMixin.js";
import { ObserverLike, QueueableLike_enqueue } from "../../../utils.js";
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
    include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()),
    function KeepObserver(
      this: ObserverMixinBaseLike<T> & TProperties<T>,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[KeepObserver_predicate] = predicate;

      return this;
    },
    props<TProperties<T>>({
      [KeepObserver_predicate]: none,
    }),
    proto({
      [ObserverMixinBaseLike_notify](
        this: TProperties<T> & LiftedObserverLike<T>,
        next: T,
      ) {
        return this[KeepObserver_predicate](next)
          ? this[LiftedObserverLike_delegate][QueueableLike_enqueue](next)
          : true;
      },
    }),
  ))();

const Observable_keep: Observable.Signature["keep"] = <T>(
  predicate: Predicate<T>,
) => pipe(createKeepObserver<T>, partial(predicate), Observable_liftPure);

export default Observable_keep;
