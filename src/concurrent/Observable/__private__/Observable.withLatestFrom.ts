import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isPure,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
} from "../../../concurrent.js";
import {
  Function2,
  Optional,
  bind,
  none,
  partial,
  pipe,
  tuple,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observer_assertObserverState from "../../Observer/__private__/Observer.assertObserverState.js";
import LiftedObserverMixin, {
  LiftedObserverLike,
  LiftedObserverLike_delegate,
} from "../../__mixins__/LiftedObserverMixin.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift, {
  ObservableLift_isStateless,
} from "./Observable.lift.js";
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

  function onWithLatestFromObserverOtherSubscriptionComplete(
    this: TProperties & DisposableLike,
  ) {
    if (!this[WithLatestFromObserver_hasLatest]) {
      this[DisposableLike_dispose]();
    }
  }

  function onOtherNotify(this: TProperties, next: TB) {
    this[WithLatestFromObserver_hasLatest] = true;
    this[WithLatestFromObserver_otherLatest] = next;
  }

  return mixInstanceFactory(
    include(
      ObserverMixin(),
      DelegatingDisposableMixin(),
      LiftedObserverMixin(),
    ),
    function WithLatestFromObserver(
      instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
        TProperties,
      delegate: ObserverLike<T>,
      other: ObservableLike<TB>,
      selector: Function2<TA, TB, T>,
    ): ObserverLike<TA> {
      init(DelegatingDisposableMixin(), instance, delegate);
      init(ObserverMixin(), instance, delegate, delegate);
      init(LiftedObserverMixin(), instance, delegate);

      instance[WithLatestFromObserver_selector] = selector;

      pipe(
        other,
        Observable_forEach(bind(onOtherNotify, instance)),
        Observable_subscribeWithConfig(delegate, delegate),
        Disposable.addTo(instance),
        DisposableContainer.onComplete(
          bind(onWithLatestFromObserverOtherSubscriptionComplete, instance),
        ),
      );

      return instance;
    },
    props<TProperties>({
      [WithLatestFromObserver_hasLatest]: false,
      [WithLatestFromObserver_otherLatest]: none,
      [WithLatestFromObserver_selector]: none,
    }),
    {
      [ObserverLike_notify]: Observer_assertObserverState(function (
        this: TProperties & LiftedObserverLike<TA, T>,
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
          this[LiftedObserverLike_delegate][ObserverLike_notify](result);
        }
      }),
    },
  );
})();

const Observable_withLatestFrom: Observable.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
) =>
  pipe(
    createWithLatestFromObserver,
    partial(other, selector),
    Observable_lift({
      [ObservableLift_isStateless]: false,
      [ObservableLike_isDeferred]: true,
      [ObservableLike_isPure]: other[ObservableLike_isPure],
      [ObservableLike_isRunnable]: other[ObservableLike_isRunnable],
    }),
  )) as Observable.Signature["withLatestFrom"];

export default Observable_withLatestFrom;
