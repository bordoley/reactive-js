import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import {
  Equality,
  none,
  partial,
  pipe,
  strictEquality,
} from "../../../functions.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const DistinctUntilChangedObserver_equality = Symbol(
  "DistinctUntilChangedObserver_equality",
);
const DistinctUntilChangedObserver_prev = Symbol(
  "DistinctUntilChangedObserver_prev",
);
const DistinctUntilChangedObserver_hasValue = Symbol(
  "DistinctUntilChangedObserver_hasValue",
);

interface TProps<T> {
  [DistinctUntilChangedObserver_equality]: Equality<T>;
  [DistinctUntilChangedObserver_prev]: T;
  [DistinctUntilChangedObserver_hasValue]: boolean;
}

const Observer_createDistinctUntilChangedObserver: <T>(
  delegate: ObserverLike<T>,
  equality: Equality<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(ObserverMixin(), DelegatingDisposableMixin<ObserverLike<T>>()),
        function DistinctUntilChangedObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> & TProps<T>,
          delegate: ObserverLike<T>,
          equality: Equality<T>,
        ): ObserverLike<T> {
          init(
            DelegatingDisposableMixin<ObserverLike<T>>(),
            instance,
            delegate,
          );

          init(ObserverMixin(), instance, delegate, delegate);

          instance[DistinctUntilChangedObserver_equality] = equality;

          return instance;
        },
        props<TProps<T>>({
          [DistinctUntilChangedObserver_equality]: none,
          [DistinctUntilChangedObserver_prev]: none,
          [DistinctUntilChangedObserver_hasValue]: false,
        }),
        {
          [SinkLike_notify](
            this: TProps<T> &
              ObserverLike<T> &
              DelegatingDisposableLike<ObserverLike<T>>,
            next: T,
          ) {
            const shouldEmit =
              !this[DistinctUntilChangedObserver_hasValue] ||
              !this[DistinctUntilChangedObserver_equality](
                this[DistinctUntilChangedObserver_prev],
                next,
              );

            if (shouldEmit) {
              this[DistinctUntilChangedObserver_prev] = next;
              this[DistinctUntilChangedObserver_hasValue] = true;
              this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
            }
          },
        },
      ),
    ),
  ))();

const Observable_distinctUntilChanged: Observable.Signature["distinctUntilChanged"] =
  <T>(options?: { readonly equality?: Equality<T> }) =>
    pipe(
      Observer_createDistinctUntilChangedObserver,
      partial(options?.equality ?? strictEquality),
      Observable_liftPure,
    );

export default Observable_distinctUntilChanged;
