import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { ContainerOperator } from "../../../containers";
import { Function2, Optional, none, partial, pipe } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$notify from "../Sink/Sink.notify";
import Observable$forEach from "./Observable.forEach";
import Observable$isEnumerable from "./Observable.isEnumerable";
import Observable$isRunnable from "./Observable.isRunnable";
import Observable$lift from "./Observable.lift";
import Observable$subscribe from "./Observable.subscribe";

const Observable$withLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = /*@__PURE__*/ (() => {
  const createWithLatestObserver: <TA, TB, T>(
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => ObserverLike<TA> = (<TA, TB, T>() => {
    const typedObserverMixin = Observer$mixin<TA>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Optional<TB>;
      readonly selector: Function2<TA, TB, T>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable$delegatingMixin, typedObserverMixin),
        function WithLatestFromObserver(
          instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(Disposable$delegatingMixin, instance, delegate);
          init(typedObserverMixin, instance, Observer$getScheduler(delegate));

          instance.delegate = delegate;
          instance.selector = selector;

          pipe(
            other,
            Observable$forEach(next => {
              instance.hasLatest = true;
              instance.otherLatest = next;
            }),
            Observable$subscribe(Observer$getScheduler(delegate)),
            Disposable$addTo(instance),
            Disposable$onComplete(() => {
              if (!instance.hasLatest) {
                pipe(instance, Disposable$dispose());
              }
            }),
          );

          return instance;
        },
        props<TProperties>({
          delegate: none,
          hasLatest: false,
          otherLatest: none,
          selector: none,
        }),
        {
          [SinkLike_notify](this: TProperties & ObserverLike<TA>, next: TA) {
            if (!Disposable$isDisposed(this) && this.hasLatest) {
              const result = this.selector(next, this.otherLatest as TB);
              pipe(this.delegate, Sink$notify(result));
            }
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
      createWithLatestObserver,
      partial(other, selector),
      Observable$lift(
        Observable$isEnumerable(other),
        Observable$isRunnable(other),
      ),
    ) as ContainerOperator<ObservableLike, TA, T>;
})();

export default Observable$withLatestFrom;
