import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { clampPositiveInteger } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
  LiftedObserverLike_notify,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import {
  DisposableLike_dispose,
  ObserverLike,
  QueueableLike_complete,
  QueueableLike_enqueue,
} from "../../../utils.js";
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

      pipe(this, Disposable.addTo(delegate));

      this[TakeFirstObserver_count] = clampPositiveInteger(takeCount ?? 1);

      if (takeCount === 0) {
        this[DisposableLike_dispose]();
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
        const delegate = this[LiftedObserverLike_delegate];

        this[TakeFirstObserver_count];
        this[TakeFirstObserver_count]--;

        const result =
          delegate?.[LiftedObserverLike_notify]?.(next) ??
          delegate[QueueableLike_enqueue](next);

        if (this[TakeFirstObserver_count] <= 0) {
          this[QueueableLike_complete]();
        }

        return result;
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
