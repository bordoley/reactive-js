import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_notify,
  LiftedObserverLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import { ObserverLike, QueueableLike_complete } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const TakeFirstObserver_count = Symbol("TakeFirstObserver_count");

interface TProperties {
  [TakeFirstObserver_count]: number;
}

const createTakeFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count?: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function TakeFirstObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedObserverLike_notify> &
        TProperties,
      delegate: ObserverLike<T>,
      takeCount?: number,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[TakeFirstObserver_count] = clampPositiveInteger(takeCount ?? 1);

      if (takeCount === 0) {
        this[QueueableLike_complete]();
      }

      return this;
    },
    props<TProperties>({
      [TakeFirstObserver_count]: 0,
    }),
    proto({
      [LiftedObserverLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        this[TakeFirstObserver_count];
        this[TakeFirstObserver_count]--;

        this[LiftedObserverLike_notifyDelegate](next);

        if (this[TakeFirstObserver_count] <= 0) {
          this[QueueableLike_complete]();
        }
      },
    }),
  ))();

const Observable_takeFirst: Observable.Signature["takeFirst"] = <T>(options?: {
  readonly count?: number;
}) =>
  pipe(
    createTakeFirstObserver<T>,
    partial(options?.count),
    Observable_liftPureDeferred,
  );

export default Observable_takeFirst;
