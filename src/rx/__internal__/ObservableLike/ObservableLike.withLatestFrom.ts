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
import {
  addTo,
  dispose,
  isDisposed,
  onComplete,
} from "../../../util/DisposableLike";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import { getScheduler } from "../../ObserverLike";
import { notify } from "../../SinkLike";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import ObservableLike__forEach from "./ObservableLike.forEach";
import ObservableLike__isEnumerable from "./ObservableLike.isEnumerable";
import ObservableLike__isRunnable from "./ObservableLike.isRunnable";
import ObservableLike__lift from "./ObservableLike.lift";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__withLatestFrom: <TA, TB, T>(
  other: ObservableLike<TB>,
  selector: Function2<TA, TB, T>,
) => ContainerOperator<ObservableLike, TA, T> = /*@__PURE__*/ (() => {
  const createWithLatestObserver: <TA, TB, T>(
    delegate: ObserverLike<T>,
    other: ObservableLike<TB>,
    selector: Function2<TA, TB, T>,
  ) => ObserverLike<TA> = (<TA, TB, T>() => {
    const typedObserverMixin = ObserverLike__mixin<TA>();

    type TProperties = {
      readonly delegate: ObserverLike<T>;
      hasLatest: boolean;
      otherLatest: Optional<TB>;
      readonly selector: Function2<TA, TB, T>;
    };

    return createInstanceFactory(
      mix(
        include(DisposableLike__delegatingMixin, typedObserverMixin),
        function WithLatestFromObserver(
          instance: Pick<ObserverLike<TA>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: ObserverLike<T>,
          other: ObservableLike<TB>,
          selector: Function2<TA, TB, T>,
        ): ObserverLike<TA> {
          init(DisposableLike__delegatingMixin, instance, delegate);
          init(typedObserverMixin, instance, getScheduler(delegate));

          instance.delegate = delegate;
          instance.selector = selector;

          pipe(
            other,
            ObservableLike__forEach(next => {
              instance.hasLatest = true;
              instance.otherLatest = next;
            }),
            ObservableLike__subscribe(getScheduler(delegate)),
            addTo(instance),
            onComplete(() => {
              if (!instance.hasLatest) {
                pipe(instance, dispose());
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
            if (!isDisposed(this) && this.hasLatest) {
              const result = this.selector(next, this.otherLatest as TB);
              pipe(this.delegate, notify(result));
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
      ObservableLike__lift(
        ObservableLike__isEnumerable(other),
        ObservableLike__isRunnable(other),
      ),
    ) as ContainerOperator<ObservableLike, TA, T>;
})();

export default ObservableLike__withLatestFrom;
