import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import Container_throws from "../../../containers/Container/__internal__/Container.throws";
import { isNumber, none, partial, pipe, returns } from "../../../functions";
import { ObservableLike, ObserverLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed";
import DisposableRef_mixin from "../../../util/DisposableRef/__internal__/DisposableRef.mixin";
import MutableRef_get from "../../../util/MutableRef/__internal__/MutableRef.get";
import {
  MutableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin";
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

  const TimeoutObserver_duration = Symbol("TimeoutObserver_duration");
  type TProperties = {
    readonly [TimeoutObserver_duration]: ObservableLike<unknown>;
  };

  const setupDurationSubscription = (
    observer: MutableRefLike<DisposableLike> &
      TProperties &
      DelegatingLike<ObserverLike<T>>,
  ) => {
    observer[MutableRefLike_current] = pipe(
      observer[TimeoutObserver_duration],
      Observable_subscribe(
        Observer_getScheduler(observer[DelegatingLike_delegate]),
      ),
    );
  };

  const createTimeoutObserver = createInstanceFactory(
    mix(
      include(
        typedObserverMixin,
        Disposable_delegatingMixin<ObserverLike<T>>(),
        typedDisposableRefMixin,
      ),
      function TimeoutObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        duration: ObservableLike<unknown>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, Observer_getScheduler(delegate));
        init(Disposable_delegatingMixin<ObserverLike<T>>(), instance, delegate);
        init(typedDisposableRefMixin, instance, Disposable_disposed);

        instance[TimeoutObserver_duration] = duration;

        setupDurationSubscription(instance);

        return instance;
      },
      props<TProperties>({
        [TimeoutObserver_duration]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties &
            MutableRefLike<DisposableLike> &
            DelegatingLike<ObserverLike<T>>,
          next: T,
        ) {
          pipe(this, MutableRef_get, Disposable_dispose());
          this[DelegatingLike_delegate][SinkLike_notify](next);
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
