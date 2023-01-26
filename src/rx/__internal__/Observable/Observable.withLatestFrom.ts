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
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import Sink_notify from "../Sink/Sink.notify";
import Observable_forEach from "./Observable.forEach";
import Observable_isEnumerable from "./Observable.isEnumerable";
import Observable_isRunnable from "./Observable.isRunnable";
import Observable_lift from "./Observable.lift";
import Observable_subscribe from "./Observable.subscribe";

const Observable_withLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = /*@__PURE__*/ (() => {
  const createWithLatestObserver: <TA, TB, T>(
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => ObserverLike<TA> = (<TA, TB, T>() => {
    const typedObserverMixin = Observer_mixin<TA>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Optional<TB>;
      readonly selector: Function2<TA, TB, T>;
    };

    return createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin, typedObserverMixin),
        function WithLatestFromObserver(
          instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(Disposable_delegatingMixin, instance, delegate);
          init(typedObserverMixin, instance, Observer_getScheduler(delegate));

          instance.delegate = delegate;
          instance.selector = selector;

          pipe(
            other,
            Observable_forEach(next => {
              instance.hasLatest = true;
              instance.otherLatest = next;
            }),
            Observable_subscribe(Observer_getScheduler(delegate)),
            Disposable_addTo(instance),
            Disposable_onComplete(() => {
              if (!instance.hasLatest) {
                pipe(instance, Disposable_dispose());
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
            if (!Disposable_isDisposed(this) && this.hasLatest) {
              const result = this.selector(next, this.otherLatest as TB);
              pipe(this.delegate, Sink_notify(result));
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
      Observable_lift(
        Observable_isEnumerable(other),
        Observable_isRunnable(other),
      ),
    ) as ContainerOperator<ObservableLike, TA, T>;
})();

export default Observable_withLatestFrom;
