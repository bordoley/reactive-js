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
  HigherOrderObservable_currentRef,
  ObserverMixin_scheduler,
} from "../../../__internal__/symbols.js";
import {
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.internal.js";
import {
  ConcatAll,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";
import { Function1, bind, bindMethod, none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, {
  TObserverMixin,
} from "../../Observer/__internal__/Observer.mixin.js";

const HigherOrderObservable_switchAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<C>["concatAll"] => {
  const createSwitchAllObserver: <T>(
    o: ObserverLike<T>,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    type TProperties = {
      readonly [HigherOrderObservable_currentRef]: SerialDisposableLike;
    };

    function onDispose(
      this: TProperties & DisposableLike & DelegatingLike<ObserverLike<T>>,
    ) {
      if (
        this[HigherOrderObservable_currentRef][SerialDisposableLike_current][
          DisposableLike_isDisposed
        ]
      ) {
        this[DelegatingLike_delegate][DisposableLike_dispose]();
      }
    }

    return createInstanceFactory(
      mix(
        include(Observer_mixin<ContainerOf<C, T>>(), delegatingMixin()),
        function SwitchAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof ObserverLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
        ): ObserverLike<ContainerOf<C, T>> {
          init(Observer_mixin(), instance, delegate, delegate);
          init(delegatingMixin(), instance, delegate);

          instance[HigherOrderObservable_currentRef] = pipe(
            SerialDisposable_create(Disposable_disposed),
            Disposable_addTo(delegate),
          );

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(bind(onDispose, instance)),
          );

          return instance;
        },
        props<TProperties>({
          [HigherOrderObservable_currentRef]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              ObserverLike<ContainerOf<C, T>> &
              SerialDisposableLike &
              DelegatingLike<ObserverLike<T>> &
              TObserverMixin<T>,
            next: ContainerOf<C, T>,
          ) {
            Observer_assertState(this);
            this[HigherOrderObservable_currentRef][
              SerialDisposableLike_current
            ] = pipe(
              next,
              Observable_forEach(
                bindMethod(this[DelegatingLike_delegate], ObserverLike_notify),
              ),
              Observable_subscribeWithConfig(
                this[ObserverMixin_scheduler],
                this,
              ),
              Disposable_onComplete(() => {
                if (this[DisposableLike_isDisposed]) {
                  this[DelegatingLike_delegate][DisposableLike_dispose]();
                }
              }),
            );
          },
        },
      ),
    );
  })();

  return () => lift(createSwitchAllObserver);
};

export default HigherOrderObservable_switchAll;
