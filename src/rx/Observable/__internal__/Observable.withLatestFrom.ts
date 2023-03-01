import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
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
  WithLatestFrom,
} from "../../../rx.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";

const Observable_withLatestFrom: WithLatestFrom<ObservableLike>["withLatestFrom"] =
  /*@__PURE__*/ (() => {
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
            instance: Pick<ObserverLike<TA>, typeof ObserverLike_notify> &
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
              Observable_forEach<ObservableLike, TB>(next => {
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
