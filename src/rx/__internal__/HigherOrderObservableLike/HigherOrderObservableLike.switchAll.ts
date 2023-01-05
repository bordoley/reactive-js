import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  DisposableRefLike,
  createDisposableRef,
} from "../../../__internal__/util/DisposableRefLike";
import { MutableRefLike_current } from "../../../__internal__/util/MutableRefLike";
import { ConcatAll, ContainerOf, ContainerOperator } from "../../../containers";
import { Function1, none, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__disposed from "../../../util/__internal__/DisposableLike/DisposableLike.disposed";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import { getScheduler } from "../../ObserverLike";
import { notifySink } from "../../SinkLike";
import ObservableLike__forEach from "../ObservableLike/ObservableLike.forEach";
import ObservableLike__subscribe from "../ObservableLike/ObservableLike.subscribe";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";

const HigherOrderObservableLike__switchAll = <C extends ObservableLike>(
  lift: <T>(
    f: Function1<ObserverLike<T>, ObserverLike<ContainerOf<C, T>>>,
  ) => ContainerOperator<C, ContainerOf<C, T>, T>,
): ConcatAll<C>["concatAll"] => {
  const createSwitchAllObserver: <T>(
    o: ObserverLike<T>,
  ) => ObserverLike<ContainerOf<C, T>> = (<T>() => {
    const typedObserverMixin = ObserverLike__mixin<ContainerOf<C, T>>();

    type TProperties = {
      readonly currentRef: DisposableRefLike;
      readonly delegate: ObserverLike<T>;
    };

    function onDispose(this: TProperties & DisposableLike) {
      if (DisposableLike__isDisposed(this.currentRef[MutableRefLike_current])) {
        pipe(this.delegate, DisposableLike__dispose());
      }
    }

    return createInstanceFactory(
      mix(
        include(DisposableLike__mixin, typedObserverMixin),
        function SwitchAllObserver(
          instance: Pick<
            ObserverLike<ContainerOf<C, T>>,
            typeof SinkLike_notify
          > &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
        ): ObserverLike<ContainerOf<C, T>> {
          init(DisposableLike__mixin, instance);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.currentRef = pipe(
            createDisposableRef(DisposableLike__disposed),
            DisposableLike__addTo(delegate),
          );

          pipe(
            instance,
            DisposableLike__addTo(delegate),
            DisposableLike__onComplete(onDispose),
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
              ObservableLike__forEach(notifySink(this.delegate)),
              ObservableLike__subscribe(getScheduler(this)),
              DisposableLike__onComplete(() => {
                if (DisposableLike__isDisposed(this)) {
                  pipe(this.delegate, DisposableLike__dispose());
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

export default HigherOrderObservableLike__switchAll;
