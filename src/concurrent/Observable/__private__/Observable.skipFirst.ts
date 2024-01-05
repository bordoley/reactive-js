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
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const SkipFirstObserver_count = Symbol("SkipFirstObserver_count");

interface TProperties {
  [SkipFirstObserver_count]: number;
}

const Observer_createSkipFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DelegatingDisposableMixin<ObserverLike<T>>(), ObserverMixin()),
        function SkipFirstObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> & TProperties,
          delegate: ObserverLike<T>,
          skipCount: number,
        ): ObserverLike<T> {
          init(
            DelegatingDisposableMixin<ObserverLike<T>>(),
            instance,
            delegate,
          );
          init(ObserverMixin(), instance, delegate, delegate);

          instance[SkipFirstObserver_count] = clampPositiveInteger(
            skipCount ?? 1,
          );

          return instance;
        },
        props<TProperties>({
          [SkipFirstObserver_count]: 0,
        }),
        {
          [SinkLike_notify](
            this: TProperties &
              DelegatingDisposableLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            this[SkipFirstObserver_count] = max(
              this[SkipFirstObserver_count] - 1,
              -1,
            );
            if (this[SkipFirstObserver_count] < 0) {
              this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
            }
          },
        },
      ),
    ),
  ))();

const Observable_skipFirst: Observable.Signature["skipFirst"] = (
  options: { readonly count?: number } = {},
) =>
  pipe(
    Observer_createSkipFirstObserver,
    partial(clampPositiveInteger(options.count ?? 1)),
    Observable_liftPure,
  );
export default Observable_skipFirst;
