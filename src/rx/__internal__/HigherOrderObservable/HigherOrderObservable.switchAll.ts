import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ConcatAll, ContainerOf, ContainerOperator } from "../../../containers";
import { Function1, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_disposed from "../../../util/__internal__/Disposable/Disposable.disposed";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import DisposableRef_create from "../../../util/__internal__/DisposableRef/DisposableRef.create";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import Observable_forEach from "../Observable/Observable.forEach";
import Observable_subscribe from "../Observable/Observable.subscribe";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_notifySink from "../Sink/Sink.notifySink";

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
      readonly currentRef: DisposableRefLike;
      readonly delegate: ObserverLike<T>;
    };

    function onDispose(this: TProperties & DisposableLike) {
      if (Disposable_isDisposed(this.currentRef[MutableRefLike_current])) {
        pipe(this.delegate, Disposable_dispose());
      }
    }

    return createInstanceFactory(
      mix(
        include(Disposable_mixin, typedObserverMixin),
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

          instance.delegate = delegate;
          instance.currentRef = pipe(
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
          currentRef: none,
          delegate: none,
        }),
        {
          [SinkLike_notify](
            this: TProperties &
              ObserverLike<ContainerOf<C, T>> &
              DisposableRefLike,
            next: ContainerOf<C, T>,
          ) {
            this.currentRef[MutableRefLike_current] = pipe(
              next,
              Observable_forEach(Sink_notifySink(this.delegate)),
              Observable_subscribe(Observer_getScheduler(this)),
              Disposable_onComplete(() => {
                if (Disposable_isDisposed(this)) {
                  pipe(this.delegate, Disposable_dispose());
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
