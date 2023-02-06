import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import Container_throws from "../../../containers/__internal__/Container/Container.throws";
import { isNumber, none, partial, pipe, returns } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_disposed from "../../../util/__internal__/Disposable/Disposable.disposed";
import DisposableRef_mixin from "../../../util/__internal__/DisposableRef/DisposableRef.mixin";
import MutableRef_get from "../../../util/__internal__/MutableRef/MutableRef.get";
import {
  MutableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import Observer_getScheduler from "../Observer/Observer.getScheduler";
import Observer_mixin from "../Observer/Observer.mixin";
import Observable_concat from "./Observable.concat";
import Observable_fromArray from "./Observable.fromArray";
import Observable_isRunnable from "./Observable.isRunnable";
import Observable_lift from "./Observable.lift";
import Observable_map from "./Observable.map";
import Observable_subscribe from "./Observable.subscribe";

const Observable_timeout = /*@__PURE__*/ (<T>() => {
  const timeoutError = Symbol("Observable.timeout.error");

  const typedDisposableRefMixin = DisposableRef_mixin();
  const typedObserverMixin = Observer_mixin();

  const TimeoutObserver_delegate = Symbol("TimeoutObserver_delegate");
  const TimeoutObserver_duration = Symbol("TimeoutObserver_duration");
  type TProperties = {
    readonly [TimeoutObserver_delegate]: ObserverLike<T>;
    readonly [TimeoutObserver_duration]: ObservableLike<unknown>;
  };

  const setupDurationSubscription = (
    observer: MutableRefLike<DisposableLike> & TProperties,
  ) => {
    observer[MutableRefLike_current] = pipe(
      observer[TimeoutObserver_duration],
      Observable_subscribe(
        Observer_getScheduler(observer[TimeoutObserver_delegate]),
      ),
    );
  };

  const createTimeoutObserver = createInstanceFactory(
    mix(
      include(
        typedObserverMixin,
        Disposable_delegatingMixin,
        typedDisposableRefMixin,
      ),
      function TimeoutObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        duration: ObservableLike<unknown>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(Disposable_delegatingMixin, instance, delegate);
        init(typedDisposableRefMixin, instance, Disposable_disposed);

        instance[TimeoutObserver_delegate] = delegate;
        instance[TimeoutObserver_duration] = duration;

        setupDurationSubscription(instance);

        return instance;
      },
      props<TProperties>({
        [TimeoutObserver_delegate]: none,
        [TimeoutObserver_duration]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & MutableRefLike<DisposableLike>,
          next: T,
        ) {
          pipe(this, MutableRef_get, Disposable_dispose());
          this[TimeoutObserver_delegate][SinkLike_notify](next);
        },
      },
    ),
  );

  const returnTimeoutError = returns(timeoutError);

  return (duration: number | ObservableLike<unknown>) => {
    const durationObs = isNumber(duration)
      ? Container_throws(
          {
            fromArray: Observable_fromArray,
            map: Observable_map,
          },
          { delay: duration, delayStart: true },
        )(returnTimeoutError)
      : Observable_concat(
          duration,
          Container_throws({
            fromArray: Observable_fromArray,
            map: Observable_map,
          })(returnTimeoutError),
        );

    return pipe(
      createTimeoutObserver,
      partial(durationObs),
      Observable_lift(
        false,
        isNumber(duration) || Observable_isRunnable(duration),
      ),
    );
  };
})();

export default Observable_timeout;
