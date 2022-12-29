import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../../../__internal__/mixins";
import {
  liftEnumerableObservable,
  liftObservable,
  liftRunnableObservable,
} from "../../../__internal__/rx/ObservableLike.lift";
import { ContainerOperator } from "../../../containers";
import {
  Function2,
  Option,
  getLength,
  isEmpty,
  none,
  partial,
  pipe,
} from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import notify from "../SinkLike/SinkLike.notify";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__isEnumerable from "./ObservableLike.isEnumerable";
import ObservableLike__isRunnable from "./ObservableLike.isRunnable";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const zipWithLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = /*@__PURE__*/ (() => {
  const createZipWithLatestFromObserver: <TA, TB, T>(
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => ObserverLike<TA> = (<TA, TB, T>() => {
    const typedObserverMixin = ObserverLike__mixin<TA>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Option<TB>;
      readonly queue: TA[];
      readonly selector: Function2<TA, TB, T>;
    };

    const notifyDelegate = (observer: TProperties & ObserverLike<TA>) => {
      if (getLength(observer.queue) > 0 && observer.hasLatest) {
        observer.hasLatest = false;
        const next = observer.queue.shift() as TA;
        const result = observer.selector(next, observer.otherLatest as TB);
        pipe(observer.delegate, notify(result));
      }
    };

    return createInstanceFactory(
      mixin(
        include(DisposableLike__mixin, typedObserverMixin),
        function ZipWithLatestFromObserer(
          instance: Pick<ObserverLike, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(DisposableLike__mixin, instance);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.queue = [];
          instance.selector = selector;

          const disposeDelegate = () => {
            if (
              DisposableLike__isDisposed(instance) &&
              DisposableLike__isDisposed(otherSubscription)
            ) {
              pipe(delegate, DisposableLike__dispose());
            }
          };

          const otherSubscription = pipe(
            other,
            ObservableLike__forEach(otherLatest => {
              instance.hasLatest = true;
              instance.otherLatest = otherLatest;
              notifyDelegate(instance);

              if (
                DisposableLike__isDisposed(instance) &&
                isEmpty(instance.queue)
              ) {
                pipe(instance.delegate, DisposableLike__dispose());
              }
            }),
            ObservableLike__subscribe(getScheduler(delegate)),
            DisposableLike__onComplete(disposeDelegate),
            DisposableLike__addTo(delegate),
          );

          pipe(
            instance,
            DisposableLike__addTo(delegate),
            DisposableLike__onComplete(disposeDelegate),
          );

          return instance;
        },
        props<TProperties>({
          delegate: none,
          hasLatest: false,
          otherLatest: none,
          queue: none,
          selector: none,
        }),
        {
          [SinkLike_notify](this: TProperties & ObserverLike<TA>, next: TA) {
            this.queue.push(next);
            notifyDelegate(this);
          },
        },
      ),
    );
  })();

  return <TA, TB, T>(
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => {
    const lift = ObservableLike__isEnumerable(other)
      ? liftEnumerableObservable
      : ObservableLike__isRunnable(other)
      ? liftRunnableObservable
      : liftObservable;
    return pipe(
      createZipWithLatestFromObserver,
      partial(other, selector),
      lift,
    ) as ContainerOperator<ObservableLike, TA, T>;
  };
})();

export default zipWithLatestFrom;
