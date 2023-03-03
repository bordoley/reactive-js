import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { isNumber, none, partial, pipe, returns } from "../../../functions.js";
import {
  ObservableLike,
  ObserverLike,
  ObserverLike_notify,
  Timeout,
} from "../../../rx.js";
import { DisposableLike } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import DisposableRef_mixin from "../../../util/DisposableRef/__internal__/DisposableRef.mixin.js";
import MutableRef_get from "../../../util/MutableRef/__internal__/MutableRef.get.js";
import {
  MutableRefLike,
  MutableRefLike_current,
} from "../../../util/__internal__/util.internal.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_getScheduler from "../../Observer/__internal__/Observer.getScheduler.js";
import Observer_mixin from "../../Observer/__internal__/Observer.mixin.js";
import Observable_concat from "./Observable.concat.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribe from "./Observable.subscribe.js";
import Observable_throws from "./Observable.throws.js";

const Observable_timeout: Timeout<ObservableLike>["timeout"] = /*@__PURE__*/ (<
  T,
>() => {
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
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
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
        [ObserverLike_notify](
          this: TProperties &
            MutableRefLike<DisposableLike> &
            DelegatingLike<ObserverLike<T>> &
            ObserverLike,
          next: T,
        ) {
          Observer_assertState(this);

          pipe(this, MutableRef_get, Disposable_dispose());
          this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
      },
    ),
  );

  const raise = returns(timeoutError);

  return (duration: number | ObservableLike<unknown>) => {
    const durationObs = isNumber(duration)
      ? Observable_throws({ delay: duration, raise })
      : Observable_concat(duration, Observable_throws({ raise }));

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
