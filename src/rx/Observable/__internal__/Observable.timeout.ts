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
import {
  ObservableLike_isEnumerable,
  TimeoutObserver_duration,
  timeoutError,
} from "../../../__internal__/symbols.js";
import {
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.internal.js";
import { ContainerOperator } from "../../../containers.js";
import { isNumber, none, partial, pipe, returns } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
} from "../../../rx.js";
import { DisposableLike, DisposableLike_dispose } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../../util/Disposable/__internal__/SerialDisposable.mixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_mixin, {
  initObserverMixinFromDelegate,
} from "../../Observer/__internal__/Observer.mixin.js";
import Observable_concat from "./Observable.concat.js";
import Observable_lift from "./Observable.lift.js";
import Observable_subscribeWithConfig from "./Observable.subscribeWithConfig.js";
import Observable_throws from "./Observable.throws.js";

interface ObservableTimeout {
  timeout<C extends ObservableLike, T>(
    duration: number,
  ): ContainerOperator<C, T, T>;
  timeout<T>(duration: RunnableLike): ContainerOperator<RunnableLike, T, T>;
  timeout<T>(duration: ObservableLike): ContainerOperator<ObservableLike, T, T>;
}

const Observable_timeout: ObservableTimeout["timeout"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedSerialDisposableMixin = SerialDisposable_mixin();
  const typedObserverMixin = Observer_mixin();

  type TProperties = {
    readonly [TimeoutObserver_duration]: ObservableLike;
  };

  const setupDurationSubscription = (
    observer: SerialDisposableLike<DisposableLike> & TProperties & ObserverLike,
  ) => {
    observer[SerialDisposableLike_current] = pipe(
      observer[TimeoutObserver_duration],
      Observable_subscribeWithConfig(observer),
    );
  };

  const createTimeoutObserver = createInstanceFactory(
    mix(
      include(
        typedObserverMixin,
        Disposable_delegatingMixin<ObserverLike<T>>(),
        typedSerialDisposableMixin,
      ),
      function TimeoutObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        duration: ObservableLike,
      ): ObserverLike<T> {
        initObserverMixinFromDelegate(instance, delegate);
        init(Disposable_delegatingMixin<ObserverLike<T>>(), instance, delegate);
        init(typedSerialDisposableMixin, instance, Disposable_disposed);

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
            SerialDisposableLike<DisposableLike> &
            DelegatingLike<ObserverLike<T>> &
            ObserverLike,
          next: T,
        ) {
          Observer_assertState(this);

          this[SerialDisposableLike_current][DisposableLike_dispose]();
          this[DelegatingLike_delegate][ObserverLike_notify](next);
        },
      },
    ),
  );

  const raise = returns(timeoutError);

  return (duration: number | ObservableLike) => {
    const durationObs = isNumber(duration)
      ? Observable_throws({ delay: duration, raise })
      : Observable_concat(duration, Observable_throws({ raise }));

    return pipe(
      createTimeoutObserver,
      partial(durationObs),
      Observable_lift({
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]:
          isNumber(duration) || duration[ObservableLike_isRunnable],
      }),
    );
  };
})() as ObservableTimeout["timeout"];

export default Observable_timeout;
