import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObservableLike, ObserverLike } from "../../../concurrent.js";
import { SinkLike_notify } from "../../../events.js";
import {
  Function2,
  Optional,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Observable from "../../Observable.js";
import Observable_forEach from "../../Observable/__private__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__private__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__private__/Observer.assertState.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_lift from "./Observable.lift.js";

const Observer_createWithLatestFromObserver: <TA, TB, T>(
  delegate: ObserverLike<T>,
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB, T>() => {
  const WithLatestFromObserver_hasLatest = Symbol(
    "WithLatestFromObserver_hasLatest",
  );
  const WithLatestFromObserver_otherLatest = Symbol(
    "WithLatestFromObserver_otherLatest",
  );
  const WithLatestFromObserver_selector = Symbol(
    "WithLatestFromObserver_selector",
  );

  type TProperties = {
    [WithLatestFromObserver_hasLatest]: boolean;
    [WithLatestFromObserver_otherLatest]: Optional<TB>;
    [WithLatestFromObserver_selector]: Function2<TA, TB, T>;
  };
  return createInstanceFactory(
    mix(
      include(ObserverMixin(), DelegatingDisposableMixin<ObserverLike<T>>()),
      function WithLatestFromObserver(
        instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> & TProperties,
        delegate: ObserverLike<T>,
        other: ObservableLike<TB>,
        selector: Function2<TA, TB, T>,
      ): ObserverLike<TA> {
        init(DelegatingDisposableMixin<ObserverLike<T>>(), instance, delegate);
        init(ObserverMixin(), instance, delegate, delegate);

        instance[WithLatestFromObserver_selector] = selector;

        pipe(
          other,
          Observable_forEach((next: TB) => {
            instance[WithLatestFromObserver_hasLatest] = true;
            instance[WithLatestFromObserver_otherLatest] = next;
          }),
          Observable_subscribeWithConfig(delegate, delegate),
          Disposable.addTo(instance),
          Disposable.onComplete(() => {
            if (!instance[WithLatestFromObserver_hasLatest]) {
              instance[DisposableLike_dispose]();
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [WithLatestFromObserver_hasLatest]: false,
        [WithLatestFromObserver_otherLatest]: none,
        [WithLatestFromObserver_selector]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            ObserverLike<TA> &
            DelegatingDisposableLike<ObserverLike<T>>,
          next: TA,
        ) {
          Observer_assertState(this);

          if (
            !this[DisposableLike_isDisposed] &&
            this[WithLatestFromObserver_hasLatest]
          ) {
            const result = this[WithLatestFromObserver_selector](
              next,
              this[WithLatestFromObserver_otherLatest] as TB,
            );
            this[DelegatingDisposableLike_delegate][SinkLike_notify](result);
          }
        },
      },
    ),
  );
})();

const Observable_withLatestFrom: Observable.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) =>
  pipe(
    Observer_createWithLatestFromObserver,
    partial(other, selector),
    Observable_lift(other),
  )) as Observable.Signature["withLatestFrom"];

export default Observable_withLatestFrom;
