import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { WithLatestLike } from "../../../__internal__/rx.js";
import {
  __WithLatestLike_hasLatest,
  __WithLatestLike_otherLatest,
  __WithLatestLike_selector,
} from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { Function2, none, partial, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
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
  const createWithLatestObserver: (
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => ObserverLike<TA> = (() =>
    createInstanceFactory(
      mix(
        include(Observer_delegatingMixin(), Delegating_mixin()),
        function WithLatestLike(
          instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
            WithLatestLike<TA, TB, T>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(Observer_delegatingMixin(), instance, delegate, delegate);
          init(Delegating_mixin(), instance, delegate);
          instance[__WithLatestLike_selector] = selector;

          pipe(
            other,
            Observable_forEach<ObservableLike, TB>(next => {
              instance[__WithLatestLike_hasLatest] = true;
              instance[__WithLatestLike_otherLatest] = next;
            }),
            Observable_subscribeWithConfig(delegate, delegate),
            Disposable_addTo(instance),
            Disposable_onComplete(() => {
              if (!instance[__WithLatestLike_hasLatest]) {
                instance[DisposableLike_dispose]();
              }
            }),
          );

          return instance;
        },
        props<WithLatestLike<TA, TB, T>>({
          [__WithLatestLike_hasLatest]: false,
          [__WithLatestLike_otherLatest]: none,
          [__WithLatestLike_selector]: none,
        }),
        {
          [ObserverLike_notify](
            this: WithLatestLike<TA, TB, T> &
              ObserverLike<TA> &
              DelegatingLike<ObserverLike<T>>,
            next: TA,
          ) {
            Observer_assertState(this);

            if (
              !this[DisposableLike_isDisposed] &&
              this[__WithLatestLike_hasLatest]
            ) {
              const result = this[__WithLatestLike_selector](
                next,
                this[__WithLatestLike_otherLatest] as TB,
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
