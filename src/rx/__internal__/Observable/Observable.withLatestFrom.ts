import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import { Function2, Optional, none, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { DisposableLike_isDisposed } from "../../../util";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import Observable_forEach from "./Observable.forEach";
import Observable_isEnumerable from "./Observable.isEnumerable";
import Observable_isRunnable from "./Observable.isRunnable";
import Observable_lift from "./Observable.lift";
import Observable_subscribe from "./Observable.subscribe";

const Observable_withLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = /*@__PURE__*/ (() => {
  const createWithLatestObserver: <TA, TB, T>(
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => ObserverLike<TA> = (<TA, TB, T>() => {
    const typedObserverMixin = Observer_mixin<TA>();

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
      readonly [WithLatestFromObserver_selector]: Function2<TA, TB, T>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin(), typedObserverMixin),
        function WithLatestFromObserver(
          instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(typedObserverMixin, instance, Observer_getScheduler(delegate));

          instance[WithLatestFromObserver_selector] = selector;

          pipe(
            other,
            Observable_forEach(next => {
              instance[WithLatestFromObserver_hasLatest] = true;
              instance[WithLatestFromObserver_otherLatest] = next;
            }),
            Observable_subscribe(Observer_getScheduler(delegate)),
            Disposable_addTo(instance),
            Disposable_onComplete(() => {
              if (!instance[WithLatestFromObserver_hasLatest]) {
                pipe(instance, Disposable_dispose());
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
              DelegatingLike<ObserverLike<T>>,
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
              this[DelegatingLike_delegate][SinkLike_notify](result);
            }
          },
        },
      ),
    );
  })();

  return <TA, TB, T>(
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) =>
    pipe(
      createWithLatestObserver,
      partial(other, selector),
      Observable_lift(
        Observable_isEnumerable(other),
        Observable_isRunnable(other),
      ),
    ) as ContainerOperator<ObservableLike, TA, T>;
})();

export default Observable_withLatestFrom;
