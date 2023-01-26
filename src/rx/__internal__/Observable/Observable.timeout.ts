import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import Container$throws from "../../../containers/__internal__/Container/Container.throws";
import { isNumber, none, partial, pipe, returns } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable$delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$disposed from "../../../util/__internal__/Disposable/Disposable.disposed";
import DisposableRef$mixin from "../../../util/__internal__/DisposableRef/DisposableRef.mixin";
import MutableRef$get from "../../../util/__internal__/MutableRef/MutableRef.get";
import {
  MutableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import Observer$getScheduler from "../Observer/Observer.getScheduler";
import Observer$mixin from "../Observer/Observer.mixin";
import Sink$notify from "../Sink/Sink.notify";
import Observable$concat from "./Observable.concat";
import Observable$fromArray from "./Observable.fromArray";
import Observable$isRunnable from "./Observable.isRunnable";
import Observable$lift from "./Observable.lift";
import Observable$map from "./Observable.map";
import Observable$subscribe from "./Observable.subscribe";

const Observable$timeout = /*@__PURE__*/ (<T>() => {
  const timeoutError = Symbol("Observable.timeout.error");

  const typedDisposableRefMixin = DisposableRef$mixin();
  const typedObserverMixin = Observer$mixin();

  type TProperties = {
    readonly delegate: ObserverLike<T>;
    readonly duration: ObservableLike<unknown>;
  };

  const setupDurationSubscription = (
    observer: MutableRefLike<DisposableLike> & TProperties,
  ) => {
    observer[MutableRefLike_current] = pipe(
      observer.duration,
      Observable$subscribe(Observer$getScheduler(observer.delegate)),
    );
  };

  const createTimeoutObserver = createInstanceFactory(
    mix(
      include(
        typedObserverMixin,
        Disposable$delegatingMixin,
        typedDisposableRefMixin,
      ),
      function TimeoutObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        duration: ObservableLike<unknown>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, Observer$getScheduler(delegate));
        init(Disposable$delegatingMixin, instance, delegate);
        init(typedDisposableRefMixin, instance, Disposable$disposed);

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
          pipe(this, MutableRef$get, Disposable$dispose());
          pipe(this.delegate, Sink$notify(next));
        },
      },
    ),
  );

  const returnTimeoutError = returns(timeoutError);

  return (duration: number | ObservableLike<unknown>) => {
    const durationObs = isNumber(duration)
      ? Container$throws(
          {
            fromArray: Observable$fromArray,
            map: Observable$map,
          },
          { delay: duration, delayStart: true },
        )(returnTimeoutError)
      : Observable$concat(
          duration,
          Container$throws({
            fromArray: Observable$fromArray,
            map: Observable$map,
          })(returnTimeoutError),
        );

    return pipe(
      createTimeoutObserver,
      partial(durationObs),
      Observable$lift(
        false,
        isNumber(duration) || Observable$isRunnable(duration),
      ),
    );
  };
})();

export default Observable$timeout;
