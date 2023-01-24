import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import ContainerLike__throws from "../../../containers/__internal__/ContainerLike/ContainerLike.throws";
import { isNumber, none, partial, pipe, returns } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import DisposableLike__delegatingMixin from "../../../util/__internal__/DisposableLike/DisposableLike.delegatingMixin";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__disposed from "../../../util/__internal__/DisposableLike/DisposableLike.disposed";
import DisposableRefLike__mixin from "../../../util/__internal__/DisposableRefLike/DisposableRefLike.mixin";
import MutableRefLike__get from "../../../util/__internal__/MutableRefLike/MutableRefLike.get";
import {
  MutableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import ObserverLike__getScheduler from "../ObserverLike/ObserverLike.getScheduler";
import ObserverLike__mixin from "../ObserverLike/ObserverLike.mixin";
import SinkLike__notify from "../SinkLike/SinkLike.notify";
import ObservableLike__concat from "./ObservableLike.concat";
import ObservableLike__fromArray from "./ObservableLike.fromArray";
import ObservableLike__isRunnable from "./ObservableLike.isRunnable";
import ObservableLike__lift from "./ObservableLike.lift";
import ObservableLike__map from "./ObservableLike.map";
import ObservableLike__subscribe from "./ObservableLike.subscribe";

const ObservableLike__timeout = /*@__PURE__*/ (<T>() => {
  const timeoutError = Symbol("ObservableLike.timeout.error");

  const typedDisposableRefMixin = DisposableRefLike__mixin();
  const typedObserverMixin = ObserverLike__mixin();

  type TProperties = {
    readonly delegate: ObserverLike<T>;
    readonly duration: ObservableLike<unknown>;
  };

  const setupDurationSubscription = (
    observer: MutableRefLike<DisposableLike> & TProperties,
  ) => {
    observer[MutableRefLike_current] = pipe(
      observer.duration,
      ObservableLike__subscribe(ObserverLike__getScheduler(observer.delegate)),
    );
  };

  const createTimeoutObserver = createInstanceFactory(
    mix(
      include(
        typedObserverMixin,
        DisposableLike__delegatingMixin,
        typedDisposableRefMixin,
      ),
      function TimeoutObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        duration: ObservableLike<unknown>,
      ): ObserverLike<T> {
        init(
          typedObserverMixin,
          instance,
          ObserverLike__getScheduler(delegate),
        );
        init(DisposableLike__delegatingMixin, instance, delegate);
        init(typedDisposableRefMixin, instance, DisposableLike__disposed);

        instance.delegate = delegate;
        instance.duration = duration;

        setupDurationSubscription(instance);

        return instance;
      },
      props<TProperties>({
        delegate: none,
        duration: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & MutableRefLike<DisposableLike>,
          next: T,
        ) {
          pipe(this, MutableRefLike__get, DisposableLike__dispose());
          pipe(this.delegate, SinkLike__notify(next));
        },
      },
    ),
  );

  const returnTimeoutError = returns(timeoutError);

  return (duration: number | ObservableLike<unknown>) => {
    const durationObs = isNumber(duration)
      ? ContainerLike__throws(
          {
            fromArray: ObservableLike__fromArray,
            map: ObservableLike__map,
          },
          { delay: duration, delayStart: true },
        )(returnTimeoutError)
      : ObservableLike__concat(
          duration,
          ContainerLike__throws({
            fromArray: ObservableLike__fromArray,
            map: ObservableLike__map,
          })(returnTimeoutError),
        );

    return pipe(
      createTimeoutObserver,
      partial(durationObs),
      ObservableLike__lift(
        false,
        isNumber(duration) || ObservableLike__isRunnable(duration),
      ),
    );
  };
})();

export default ObservableLike__timeout;
