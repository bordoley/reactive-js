import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import { Predicate, none, partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_liftPure from "./Observable.liftPure.js";

const TakeWhileObserver_inclusive = Symbol("TakeWhileObserver_inclusive");
const TakeWhileObserver_predicate = Symbol("TakeWhileObserver_predicate");

interface TProperties<T> {
  [TakeWhileObserver_inclusive]: boolean;
  [TakeWhileObserver_predicate]: Predicate<T>;
}

const Observer_createTakeWhileObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
  inclusive: boolean,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    decorateNotifyWithObserverStateAssert(
      mix(
        include(DelegatingDisposableMixin<ObserverLike<T>>(), ObserverMixin()),
        function TakeWhileObserver(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
            TProperties<T>,
          delegate: ObserverLike<T>,
          predicate: Predicate<T>,
          inclusive: boolean,
        ): ObserverLike<T> {
          init(
            DelegatingDisposableMixin<ObserverLike<T>>(),
            instance,
            delegate,
          );
          init(ObserverMixin(), instance, delegate, delegate);

          instance[TakeWhileObserver_predicate] = predicate;
          instance[TakeWhileObserver_inclusive] = inclusive ?? false;

          return instance;
        },
        props<TProperties<T>>({
          [TakeWhileObserver_predicate]: none,
          [TakeWhileObserver_inclusive]: none,
        }),
        {
          [SinkLike_notify](
            this: TProperties<T> &
              DelegatingDisposableLike<ObserverLike<T>> &
              ObserverLike<T>,
            next: T,
          ) {
            const satisfiesPredicate = this[TakeWhileObserver_predicate](next);

            if (satisfiesPredicate || this[TakeWhileObserver_inclusive]) {
              this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
            }

            if (!satisfiesPredicate) {
              this[DisposableLike_dispose]();
            }
          },
        },
      ),
    ),
  ))();

const Observable_takeWhile: Observable.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    Observer_createTakeWhileObserver,
    partial(predicate, options?.inclusive ?? false),
    Observable_liftPure,
  );

export default Observable_takeWhile;
