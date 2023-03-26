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
import { HigherOrderObservable_currentRef } from "../../../__internal__/symbols.js";
import {
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.internal.js";
import {
  ConcatAll,
  ContainerOf,
  ContainerOperator,
} from "../../../containers.js";
import { Function1, bind, none, pipe } from "../../../functions.js";
import {
  DispatcherLike_scheduler,
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_maxBufferSize,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import SerialDisposable_create from "../../../util/Disposable/__internal__/SerialDisposable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_subscribeWithMaxBufferSize from "../../Observable/__internal__/Observable.subscribeWithMaxBufferSize.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";

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
          init(
            typedObserverMixin,
            instance,
            delegate[DispatcherLike_scheduler],
            delegate[QueueableLike_maxBufferSize],
          );
          init(delegatingMixin(), instance, delegate);

          instance[HigherOrderObservable_currentRef] = pipe(
            SerialDisposable_create(Disposable_disposed),
            Disposable_addTo(delegate),
          );

          pipe(
            instance,
            Disposable_addTo(delegate),
            Disposable_onComplete(onDispose, instance),
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
              DelegatingLike<ObserverLike<T>>,
            next: ContainerOf<C, T>,
          ) {
            Observer_assertState(this);
            this[HigherOrderObservable_currentRef][
              SerialDisposableLike_current
            ] = pipe(
              next,
              Observable_forEach(
                bind(
                  this[DelegatingLike_delegate][ObserverLike_notify],
                  this[DelegatingLike_delegate],
                ),
              ),
              Observable_subscribeWithMaxBufferSize(
                this[DispatcherLike_scheduler],
                this[QueueableLike_maxBufferSize],
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
