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
  ConcatAll,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";
import { Function1, none, pipe } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import DisposableRef_create from "../../../util/DisposableRef/__internal__/DisposableRef.create.js";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observer_notifyObserver from "../../Observer/__internal__/Observer.notifyObserver.js";

const HigherOrderObservable_currentRef = Symbol(
  "HigherOrderObservable_currentRef",
);

const HigherOrderObservable_switchAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<C>["concatAll"] => {
  const createSwitchAllObserver: <T>(
    o: ObserverLike<T>,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    const typedObserverMixin = Observer_mixin<ContainerOf<C, T>>();

    type TProperties = {
      readonly [HigherOrderObservable_currentRef]: DisposableRefLike;
    };

    function onDispose(
      this: TProperties & DisposableLike & DelegatingLike<ObserverLike<T>>,
    ) {
      if (
        Disposable_isDisposed(
          this[HigherOrderObservable_currentRef][MutableRefLike_current],
        )
      ) {
        pipe(this[DelegatingLike_delegate], Disposable_dispose());
      }
    }

    return createInstanceFactory(
      mix(
        include(Disposable_mixin, typedObserverMixin, delegatingMixin()),
        function SwitchAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof ObserverLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
        ): ObserverLike<ContainerOf<C, T>> {
          init(Disposable_mixin, instance);
          init(typedObserverMixin, instance, Observer_getScheduler(delegate));
          init(delegatingMixin(), instance, delegate);

          instance[HigherOrderObservable_currentRef] = pipe(
            DisposableRef_create(Disposable_disposed),
            Disposable_addTo(delegate),
          );

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(onDispose),
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
              DisposableRefLike &
              DelegatingLike<ObserverLike<T>>,
            next: ContainerOf<C, T>,
          ) {
            Observer_assertState(this);
            this[HigherOrderObservable_currentRef][MutableRefLike_current] =
              pipe(
                next,
                Observable_forEach(
                  Observer_notifyObserver(this[DelegatingLike_delegate]),
                ),
                Observable_subscribe(Observer_getScheduler(this)),
                Disposable_onComplete(() => {
                  if (Disposable_isDisposed(this)) {
                    pipe(this[DelegatingLike_delegate], Disposable_dispose());
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
