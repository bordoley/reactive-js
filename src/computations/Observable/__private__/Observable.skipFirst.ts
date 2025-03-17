import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { none, partial, pipe } from "../../../functions.js";
import { clampPositiveInteger, max } from "../../../math.js";
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
    include(DelegatingDisposableMixin, LiftedObserverMixin()),
    function SkipFirstObserver(
      this: Pick<LiftedObserverLike<T>, typeof LiftedEventListenerLike_notify> &
        TProperties,
      delegate: ObserverLike<T>,
      skipCount?: number,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, delegate);
      init(LiftedObserverMixin<T>(), this, delegate, none);

      this[SkipFirstObserver_count] = clampPositiveInteger(skipCount ?? 1);

      return this;
    },
    props<TProperties>({
      [SkipFirstObserver_count]: 0,
    }),
    proto({
      [LiftedEventListenerLike_notify](
        this: TProperties & LiftedObserverLike<T>,
        next: T,
      ) {
        this[SkipFirstObserver_count] = max(
          this[SkipFirstObserver_count] - 1,
          -1,
        );

        const shouldEmit = this[SkipFirstObserver_count] < 0;

        if (shouldEmit) {
          this[LiftedEventListenerLike_notifyDelegate](next);
        }
      },
    }),
  ))();

const Observable_skipFirst: Observable.Signature["skipFirst"] = (<T>(options?: {
  readonly count?: number;
}) =>
  pipe(
    createSkipFirstObserver<T>,
    partial(options?.count),
    Observable_liftPureDeferred,
  )) as Observable.Signature["skipFirst"];
export default Observable_skipFirst;
