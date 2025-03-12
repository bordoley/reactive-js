import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { partial, pipe } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../../utils/__mixins__/LiftedObserverMixin.js";
import ObserverMixin, {
  ObserverMixinBaseLike,
  ObserverMixinBaseLike_notify,
} from "../../../utils/__mixins__/ObserverMixin.js";
import {
  ObserverLike,
  QueueableLike_enqueue,
  QueueableLike_isReady,
} from "../../../utils.js";

import type * as Observable from "../../Observable.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const SkipFirstObserver_count = Symbol("SkipFirstObserver_count");

interface TProperties {
  [SkipFirstObserver_count]: number;
}

const createSkipFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count?: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DelegatingDisposableMixin, ObserverMixin(), LiftedObserverMixin()),
    function SkipFirstObserver(
      this: ObserverMixinBaseLike<T> & TProperties,
      delegate: ObserverLike<T>,
      skipCount?: number,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(ObserverMixin(), this, delegate, delegate);
      init(LiftedObserverMixin(), this, delegate);

      this[SkipFirstObserver_count] = clampPositiveInteger(skipCount ?? 1);

      return this;
    },
    props<TProperties>({
      [SkipFirstObserver_count]: 0,
    }),
    proto({
      [ObserverMixinBaseLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        const delegate = this[LiftedObserverLike_delegate];

        this[SkipFirstObserver_count] = max(
          this[SkipFirstObserver_count] - 1,
          -1,
        );

        const shouldEmit = this[SkipFirstObserver_count] < 0;

        return (
          (shouldEmit &&
            (delegate?.[ObserverMixinBaseLike_notify]?.(next) ??
              delegate[QueueableLike_enqueue](next))) ||
          delegate[QueueableLike_isReady]
        );
      },
    }),
  ))();

const Observable_skipFirst: Observable.Signature["skipFirst"] = <T>(options?: {
  readonly count?: number;
}) =>
  pipe(
    createSkipFirstObserver<T>,
    partial(options?.count),
    Observable_liftPureDeferred,
  );
export default Observable_skipFirst;
