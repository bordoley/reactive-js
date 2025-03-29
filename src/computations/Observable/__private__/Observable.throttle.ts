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
  call,
  isSome,
  none,
  partial,
  pipe,
  returns,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import * as SerialDisposable from "../../../utils/SerialDisposable.js";
import {
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  SerialDisposableLike,
  SerialDisposableLike_current,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import * as Source from "../../Source.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../../__internal__/LiftedSource.js";
import DelegatingLiftedSinkMixin, {
  DelegatingLiftedSinkLike,
  DelegatingLiftedSinkLike_delegate,
  DelegatingLiftedSinkLike_onCompleted,
} from "../../__mixins__/DelegatingLiftedSinkMixin.js";
import Observable_delay from "./Observable.delay.js";
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
    [ThrottleSink_durationSubscription]: SerialDisposableLike;
    [ThrottleSink_durationFunction]: Function1<T, ObservableLike>;
    [ThrottleSink_mode]: Observable.ThrottleMode;
  };

  function notifyThrottleObserverDelegate(
    this: DelegatingLiftedSinkLike<ObserverLike, T> & TProperties,
    _?: unknown,
  ) {
    const delegate = this[DelegatingLiftedSinkLike_delegate];
    const delegateIsCompleted = delegate[SinkLike_isCompleted];

    if (this[ThrottleSink_hasValue] && !delegateIsCompleted) {
      const value = this[ThrottleSink_value] as T;
      this[ThrottleSink_value] = none;
      this[ThrottleSink_hasValue] = false;

      delegate[EventListenerLike_notify](value);

      setupDurationSubscription(this, value);
    }
  }

  const setupDurationSubscription = (
    thiz: DelegatingLiftedSinkLike<ObserverLike, T> & TProperties,
    next: T,
  ) => {
    const scheduler = thiz[LiftedSinkLike_subscription];

    thiz[ThrottleSink_durationSubscription][SerialDisposableLike_current] =
      pipe(
        thiz[ThrottleSink_durationFunction](next),
        Source.subscribe({ scheduler }),
        // This works because dispose is called in a scheduler
        // continuation immediately after the sink is completed.
        DisposableContainer.onComplete(
          bind(notifyThrottleObserverDelegate, thiz),
        ),
        Disposable.addTo(thiz),
      );
  };

  return mixInstanceFactory(
    include(DelegatingLiftedSinkMixin<ObserverLike, T>()),
    function ThrowIfEmptySink(
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

      this[ThrottleSink_durationSubscription] = pipe(
        SerialDisposable.create(),
        Disposable.addTo(delegate),
      );

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
        this[ThrottleSink_value] = next;
        this[ThrottleSink_hasValue] = true;

        const durationSubscriptionDisposableIsDisposed =
          this[ThrottleSink_durationSubscription][SerialDisposableLike_current][
            DisposableLike_isDisposed
          ];

        if (
          durationSubscriptionDisposableIsDisposed &&
          this[ThrottleSink_mode] !== ThrottleLastMode
        ) {
          call(notifyThrottleObserverDelegate, this);
        } else if (durationSubscriptionDisposableIsDisposed) {
          setupDurationSubscription(this, next);
        }
      },

      [DelegatingLiftedSinkLike_onCompleted](
        this: TProperties & DelegatingLiftedSinkLike<ObserverLike, T>,
      ) {
        const delegate = this[DelegatingLiftedSinkLike_delegate];
        const delegateIsComplete = delegate[SinkLike_isCompleted];
        if (
          this[ThrottleSink_mode] !== ThrottleFirstMode &&
          this[ThrottleSink_hasValue] &&
          !delegateIsComplete &&
          isSome(this[ThrottleSink_value])
        ) {
          const value = this[ThrottleSink_value];
          this[ThrottleSink_value] = none;
          this[ThrottleSink_hasValue] = false;
          delegate[EventListenerLike_notify](value);
        }
        delegate[SinkLike_complete]();
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
