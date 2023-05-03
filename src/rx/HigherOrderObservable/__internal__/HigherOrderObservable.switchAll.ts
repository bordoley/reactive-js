import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { __HigherOrderObservable_currentRef } from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.js";
import {
  Container,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";
import { Function1, bind, bindMethod, none, pipe } from "../../../functions.js";
import {
  ObservableContainer,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
} from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithConfig from "../../Observable/__internal__/Observable.subscribeWithConfig.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin_initFromDelegate from "../../Observer/__internal__/Observer.mixin.initFromDelegate.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

const HigherOrderObservable_switchAll = <C extends ObservableContainer>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): Container.ConcatAll<C>["concatAll"] => {
  const createSwitchAllObserver: <T>(
    o: ObserverLike<T>,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    type TProperties = {
      readonly [__HigherOrderObservable_currentRef]: SerialDisposableLike;
    };

    function onDispose(
      this: TProperties & DisposableLike & DelegatingLike<ObserverLike<T>>,
    ) {
      if (
        this[__HigherOrderObservable_currentRef][SerialDisposableLike_current][
          DisposableLike_isDisposed
        ]
      ) {
        this[DelegatingLike_delegate][DisposableLike_dispose]();
      }
    }

    return createInstanceFactory(
      mix(
        include(Observer_mixin<ContainerOf<C, T>>(), Delegating_mixin()),
        function SwitchAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof ObserverLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
        ): ObserverLike<ContainerOf<C, T>> {
          Observer_mixin_initFromDelegate(instance, delegate);
          init(Delegating_mixin(), instance, delegate);

          instance[__HigherOrderObservable_currentRef] = pipe(
            SerialDisposable_create(Disposable_disposed),
            Disposable_addTo(delegate),
          );

          pipe(instance, Disposable_onComplete(bind(onDispose, instance)));

          return instance;
        },
        props<TProperties>({
          [__HigherOrderObservable_currentRef]: none,
        }),
        {
          [ObserverLike_notify](
            this: TProperties &
              ObserverLike<ContainerOf<C, T>> &
              SerialDisposableLike &
              DelegatingLike<ObserverLike<T>> &
              DelegatingLike<ObserverLike>,
            next: ContainerOf<C, T>,
          ) {
            Observer_assertState(this);
            this[__HigherOrderObservable_currentRef][
              SerialDisposableLike_current
            ] = pipe(
              next,
              Observable_forEach(
                bindMethod(this[DelegatingLike_delegate], ObserverLike_notify),
              ),
              Observable_subscribeWithConfig(
                this[DelegatingLike_delegate],
                this,
              ),
              Disposable_addTo(this[DelegatingLike_delegate]),
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
