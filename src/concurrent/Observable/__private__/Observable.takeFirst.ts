import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPureDeferred from "./Observable.liftPureDeferred.js";

const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");

interface TProperties {
  [TakeFirstSinkMixin_count]: number;
}

const Observer_createTakeFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DelegatingDisposableMixin<ObserverLike<T>>(), ObserverMixin()),
        function TakeFirstObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> & TProperties,
          delegate: ObserverLike<T>,
          takeCount: number,
        ): ObserverLike<T> {
          init(
            DelegatingDisposableMixin<ObserverLike<T>>(),
            instance,
            delegate,
          );
          init(ObserverMixin(), instance, delegate, delegate);

          instance[TakeFirstSinkMixin_count] = clampPositiveInteger(
            takeCount ?? 1,
          );

          if (takeCount === 0) {
            instance[DisposableLike_dispose]();
          }

          return instance;
        },
        props<TProperties>({
          [TakeFirstSinkMixin_count]: 0,
        }),
        {
          [SinkLike_notify](
            this: TProperties &
              DelegatingDisposableLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            this[TakeFirstSinkMixin_count] = max(
              this[TakeFirstSinkMixin_count] - 1,
              -1,
            );
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
            if (this[TakeFirstSinkMixin_count] <= 0) {
              this[DisposableLike_dispose]();
            }
          },
        },
      ),
    ),
  ))();

const Observable_takeFirst: Observable.Signature["takeFirst"] = (
  options: { readonly count?: number } = {},
) =>
  pipe(
    Observer_createTakeFirstObserver,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPureDeferred,
  );

export default Observable_takeFirst;
