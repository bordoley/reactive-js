import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { ObservableLike } from "../../../computations.js";
import {
  Function1,
  Optional,
  bind,
  none,
  partial,
  pipe,
  returns,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DelegatingEventListenerLike_delegate } from "../../../utils/__mixins__/DelegatingEventListenerMixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  SchedulerLike_inContinuation,
  SinkLike_isCompleted,
} from "../../../utils.js";
import * as EventSource from "../../EventSource.js";
import Observable_delay from "../../Observable/__private__/Observable.delay.js";
import type * as Observable from "../../Observable.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../../__internal__/LiftedSource.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import Observable_lift from "./Observable.lift.js";

const ThrottleFirstMode = "first";
const ThrottleLastMode = "last";
const ThrottleIntervalMode = "interval";

const createThrottleSink: <T>(
  delegate: LiftedSinkLike<ObserverLike, T>,
  durationFunction: Function1<T, ObservableLike>,
  mode: Observable.ThrottleMode,
) => LiftedSinkLike<ObserverLike, T> = /*@__PURE__*/ (<T>() => {
  const ThrottleSink_value = Symbol("ThrottleSink_value");
  const ThrottleSink_hasValue = Symbol("ThrottleSink_hasValue");
  const ThrottleSink_durationSubscription = Symbol(
    "ThrottleSink_durationSubscription",
  );
  const ThrottleSink_durationFunction = Symbol("ThrottleSink_durationFunction");
  const ThrottleSink_mode = Symbol("ThrottleSink_mode");

  type TProperties = {
    [ThrottleSink_value]: Optional<T>;
    [ThrottleSink_hasValue]: boolean;
    [ThrottleSink_durationSubscription]: DisposableLike;
    [ThrottleSink_durationFunction]: Function1<T, ObservableLike>;
    [ThrottleSink_mode]: Observable.ThrottleMode;
  };

  function notifyThrottleObserverDelegate(
    this: DelegatingLiftedSinkLike<ObserverLike, T> & TProperties,
    _?: unknown,
  ) {
    const delegate = this[DelegatingEventListenerLike_delegate];
    const delegateIsCompleted = delegate[SinkLike_isCompleted];
    const mode = this[ThrottleSink_mode];

    const hasValue = this[ThrottleSink_hasValue];
    const value = this[ThrottleSink_value] as T;
    const scheduler = this[LiftedSinkLike_subscription];

    // We only want to notify when the durationSubscription has either completed
    // itself or was in disposed from DelegatingLiftedSinkLike_onCompleted
    // otherwise the subscription was probably externally disposed and
    // don't worry about it.
    const inContinuation = scheduler[SchedulerLike_inContinuation];

    this[ThrottleSink_value] = none;
    this[ThrottleSink_hasValue] = false;

    if (
      inContinuation &&
      hasValue &&
      !delegateIsCompleted &&
      mode !== ThrottleFirstMode
    ) {
      delegate[EventListenerLike_notify](value);
    }
  }

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<ObserverLike, T>()),
    function ThrottleSink(
      this: Pick<
        DelegatingLiftedSinkLike<ObserverLike, T>,
        typeof EventListenerLike_notify
      > &
        TProperties,
      delegate: LiftedSinkLike<ObserverLike, T>,
      durationFunction: Function1<T, ObservableLike>,
      mode: Observable.ThrottleMode,
    ): LiftedSinkLike<ObserverLike, T> {
      init(DelegatingLiftedSinkMixin<ObserverLike, T>(), this, delegate);

      this[ThrottleSink_durationFunction] = durationFunction;
      this[ThrottleSink_mode] = mode;

      this[ThrottleSink_durationSubscription] = Disposable.disposed;

      return this;
    },
    props<TProperties>({
      [ThrottleSink_value]: none,
      [ThrottleSink_hasValue]: false,
      [ThrottleSink_durationSubscription]: none,
      [ThrottleSink_durationFunction]: none,
      [ThrottleSink_mode]: ThrottleIntervalMode,
    }),
    proto({
      [EventListenerLike_notify](
        this: TProperties & DelegatingLiftedSinkLike<ObserverLike, T>,
        next: T,
      ) {
        const durationSubscriptionIsDisposed =
          this[ThrottleSink_durationSubscription][DisposableLike_isDisposed];

        const delegate = this[DelegatingEventListenerLike_delegate];
        const mode = this[ThrottleSink_mode];
        const scheduler = this[LiftedSinkLike_subscription];

        if (durationSubscriptionIsDisposed && mode !== ThrottleLastMode) {
          delegate[EventListenerLike_notify](next);
        } else {
          this[ThrottleSink_value] = next;
          this[ThrottleSink_hasValue] = true;
        }

        if (durationSubscriptionIsDisposed) {
          this[ThrottleSink_durationSubscription] = pipe(
            this[ThrottleSink_durationFunction](next),
            EventSource.subscribe({ scheduler }),
            DisposableContainer.onComplete(
              bind(notifyThrottleObserverDelegate, this),
            ),
            Disposable.addTo(this),
          );
        }
      },

      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties & DelegatingLiftedSinkLike<ObserverLike, T>,
      ) {
        this[ThrottleSink_durationSubscription][DisposableLike_dispose]();
      },
    }),
  );
})();

const Observable_throttle: Observable.Signature["throttle"] = (<T>(
  duration: number,
  options: { readonly mode?: Observable.ThrottleMode } = {},
) => {
  const { mode = ThrottleIntervalMode } = options;

  const durationObservable = returns(Observable_delay(duration));

  return pipe(
    createThrottleSink<T>,
    partial(durationObservable, mode),
    Observable_lift(),
  );
}) as Observable.Signature["throttle"];

export default Observable_throttle;
