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
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$disposed from "../../../util/__internal__/Disposable/Disposable.disposed";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import DisposableRef$create from "../../../util/__internal__/DisposableRef/DisposableRef.create";
import {
  DisposableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import Observable$forEach from "../Observable/Observable.forEach";
import Observable$subscribe from "../Observable/Observable.subscribe";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$notifySink from "../Sink/Sink.notifySink";

const HigherOrderObservable$switchAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<C>["concatAll"] => {
  const createSwitchAllObserver: <T>(
    o: ObserverLike<T>,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    const typedObserverMixin = Observer$mixin<ContainerOf<C, T>>();

    type TProperties = {
      readonly currentRef: DisposableRefLike;
      readonly delegate: ObserverLike<T>;
    };

    function onDispose(this: TProperties & DisposableLike) {
      if (Disposable$isDisposed(this.currentRef[MutableRefLike_current])) {
        pipe(this.delegate, Disposable$dispose());
      }
    }

    return createInstanceFactory(
      mix(
        include(Disposable$mixin, typedObserverMixin),
        function SwitchAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
        ): ObserverLike<ContainerOf<C, T>> {
          init(Disposable$mixin, instance);
          init(typedObserverMixin, instance, Observer$getScheduler(delegate));

          instance.delegate = delegate;
          instance.currentRef = pipe(
            DisposableRef$create(Disposable$disposed),
            Disposable$addTo(delegate),
          );

          pipe(
            instance,
            Disposable$addTo(delegate),
            Disposable$onComplete(onDispose),
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
              Observable$forEach(Sink$notifySink(this.delegate)),
              Observable$subscribe(Observer$getScheduler(this)),
              Disposable$onComplete(() => {
                if (Disposable$isDisposed(this)) {
                  pipe(this.delegate, Disposable$dispose());
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

export default HigherOrderObservable$switchAll;
