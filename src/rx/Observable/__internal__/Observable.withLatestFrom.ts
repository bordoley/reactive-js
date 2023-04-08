import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  WithLatestFromObserver_hasLatest,
  WithLatestFromObserver_otherLatest,
  WithLatestFromObserver_selector,
} from "../../../__internal__/symbols.js";
import { ContainerOf, ContainerOperator } from "../../../containers.js";
import {
  Function2,
  Optional,
  none,
  partial,
  pipe,
} from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";

type ObservableWithLastestFrom = <C extends ObservableLike, TA, TB, T>(
  other: ContainerOf<C, TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<C, TA, T>;
const Observable_withLatestFrom: ObservableWithLastestFrom = /*@__PURE__*/ (<
  TA,
  TB,
  T,
>() => {
  type TProperties = {
    [WithLatestFromObserver_hasLatest]: boolean;
    [WithLatestFromObserver_otherLatest]: Optional<TB>;
    readonly [WithLatestFromObserver_selector]: Function2<TA, TB, T>;
  };

  const createWithLatestObserver: (
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => ObserverLike<TA> = (() =>
    createInstanceFactory(
      mix(
        include(Observer_delegatingMixin(), delegatingMixin()),
        function WithLatestFromObserver(
          instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(delegatingMixin(), instance, delegate);
          instance[WithLatestFromObserver_selector] = selector;

          pipe(
            other,
            Observable_forEach<ObservableLike, TB>(next => {
              instance[WithLatestFromObserver_hasLatest] = true;
              instance[WithLatestFromObserver_otherLatest] = next;
            }),
            Observable_subscribeWithConfig(delegate, delegate),
            Disposable_addTo(instance),
            Disposable_onComplete(() => {
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
              DelegatingLike<ObserverLike<T>>,
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
              this[DelegatingLike_delegate][ObserverLike_notify](result);
            }
          },
        },
      ),
    ))();

  return (other: ObservableLike<TB>, selector: Function2<TA, TB, T>) =>
    pipe(
      createWithLatestObserver,
      partial(other, selector),
      Observable_lift(other),
    );
})() as ObservableWithLastestFrom;

export default Observable_withLatestFrom;
