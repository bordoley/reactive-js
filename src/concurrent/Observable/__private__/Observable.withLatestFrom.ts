import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isMulticasted,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
} from "../../../concurrent.js";
import {
  Function2,
  Optional,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import decorateNotifyWithObserverStateAssert from "../../__mixins__/decorateNotifyWithObserverStateAssert.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

const createWithLatestFromObserver: <TA, TB, T>(
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
    decorateNotifyWithObserverStateAssert(
      mix(
        include(ObserverMixin(), DelegatingDisposableMixin<ObserverLike<T>>()),
        function WithLatestFromObserver(
          instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
            TProperties,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(
            DelegatingDisposableMixin<ObserverLike<T>>(),
            instance,
            delegate,
          );
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
            DisposableContainer.onComplete(() => {
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
          [ObserverLike_notify](
            this: TProperties &
              ObserverLike<TA> &
              DelegatingDisposableLike<ObserverLike<T>>,
            next: TA,
          ) {
            if (
              !this[DisposableLike_isDisposed] &&
              this[WithLatestFromObserver_hasLatest]
            ) {
              const result = this[WithLatestFromObserver_selector](
                next,
                this[WithLatestFromObserver_otherLatest] as TB,
              );
              this[DelegatingDisposableLike_delegate][ObserverLike_notify](
                result,
              );
            }
          },
        },
      ),
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
    createWithLatestFromObserver,
    partial(other, selector),
    Observable_lift({
      [ObservableLike_isDeferred]: true,
      [ObservableLike_isMulticasted]: false,
      [ObservableLike_isPure]: other[ObservableLike_isPure],
      [ObservableLike_isRunnable]: other[ObservableLike_isRunnable],
    }),
  )) as Observable.Signature["withLatestFrom"];

export default Observable_withLatestFrom;
