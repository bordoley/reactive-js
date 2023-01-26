import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import {
  Function2,
  Optional,
  getLength,
  isEmpty,
  none,
  partial,
  pipe,
} from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import notify from "../Sink/Sink.notify";
import Observable$forEach from "./Observable.forEach";
import Observable$isEnumerable from "./Observable.isEnumerable";
import Observable$isRunnable from "./Observable.isRunnable";
import Observable$lift from "./Observable.lift";
import Observable$subscribe from "./Observable.subscribe";

const Observable$zipWithLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = /*@__PURE__*/ (() => {
  const createZipWithLatestFromObserver: <TA, TB, T>(
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => ObserverLike<TA> = (<TA, TB, T>() => {
    const typedObserverMixin = Observer$mixin<TA>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Optional<TB>;
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
      mix(
        include(Disposable$mixin, typedObserverMixin),
        function ZipWithLatestFromObserer(
          instance: Pick<ObserverLike, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(Disposable$mixin, instance);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.queue = [];
          instance.selector = selector;

          const disposeDelegate = () => {
            if (
              Disposable$isDisposed(instance) &&
              Disposable$isDisposed(otherSubscription)
            ) {
              pipe(delegate, Disposable$dispose());
            }
          };

          const otherSubscription = pipe(
            other,
            Observable$forEach(otherLatest => {
              instance.hasLatest = true;
              instance.otherLatest = otherLatest;
              notifyDelegate(instance);

              if (Disposable$isDisposed(instance) && isEmpty(instance.queue)) {
                pipe(instance.delegate, Disposable$dispose());
              }
            }),
            Observable$subscribe(getScheduler(delegate)),
            Disposable$onComplete(disposeDelegate),
            Disposable$addTo(delegate),
          );

          pipe(
            instance,
            Disposable$addTo(delegate),
            Disposable$onComplete(disposeDelegate),
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
  ) =>
    pipe(
      createZipWithLatestFromObserver,
      partial(other, selector),
      Observable$lift(
        Observable$isEnumerable(other),
        Observable$isRunnable(other),
      ),
    ) as ContainerOperator<ObservableLike, TA, T>;
})();

export default Observable$zipWithLatestFrom;
