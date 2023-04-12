import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  __TimeoutObserver_duration,
  __timeoutError,
} from "../../../__internal__/symbols.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.js";
import { ContainerOperator } from "../../../containers.js";
import { isNumber, none, partial, pipe, returns } from "../../../functions.js";
import {
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObserverLike,
  ObserverLike_notify,
  RunnableLike,
} from "../../../rx.js";
import { DisposableLike, DisposableLike_dispose } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../../util/Disposable/__internal__/SerialDisposable.mixin.js";
import Observer_assertState from "../../Observer/__internal__/Observer.assertState.js";
import Observer_delegatingMixin from "../../Observer/__internal__/Observer.delegatingMixin.js";
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
  type TProperties = {
    readonly [__TimeoutObserver_duration]: ObservableLike;
  };

  const setupDurationSubscription = (
    observer: SerialDisposableLike<DisposableLike> & TProperties & ObserverLike,
  ) => {
    observer[SerialDisposableLike_current] = pipe(
      observer[__TimeoutObserver_duration],
      Observable_subscribeWithConfig(observer, observer),
    );
  };

  const createTimeoutObserver = createInstanceFactory(
    mix(
      include(
        Observer_delegatingMixin(),
        SerialDisposable_mixin(),
        Delegating_mixin(),
      ),
      function TimeoutObserver(
        instance: Pick<ObserverLike<T>, typeof ObserverLike_notify> &
          Mutable<TProperties>,
        delegate: ObserverLike<T>,
        duration: ObservableLike,
      ): ObserverLike<T> {
        init(Observer_delegatingMixin(), instance, delegate, delegate);
        init(SerialDisposable_mixin(), instance, Disposable_disposed);
        init(Delegating_mixin(), instance, delegate);
        instance[__TimeoutObserver_duration] = duration;

        setupDurationSubscription(instance);

        return instance;
      },
      props<TProperties>({
        [__TimeoutObserver_duration]: none,
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

  const raise = returns(__timeoutError);

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
