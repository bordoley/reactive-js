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
} from "../../../__internal__/mixins";
import { ConcatAll, ContainerOf, ContainerOperator } from "../../../containers";
import { Function1, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import DisposableRef_create from "../../../util/DisposableRef/__internal__/DisposableRef.create";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach";
import Observable_subscribe from "../../Observable/__internal__/Observable.subscribe";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin";
import Sink_notifySink from "../../Sink/__internal__/Sink.notifySink";

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
            typeof SinkLike_notify
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
          [SinkLike_notify](
            this: TProperties &
              ObserverLike<ContainerOf<C, T>> &
              DisposableRefLike &
              DelegatingLike<ObserverLike<T>>,
            next: ContainerOf<C, T>,
          ) {
            this[HigherOrderObservable_currentRef][MutableRefLike_current] =
              pipe(
                next,
                Observable_forEach(
                  Sink_notifySink(this[DelegatingLike_delegate]),
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
