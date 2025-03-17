import { Mixin1, mix, props, proto } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  DisposableLike,
  EventListenerLike,
  EventListenerLike_notify,
  QueueLike,
  SerialDisposableLike,
} from "../../utils.js";

export const LiftedEventListenerLike_notify = Symbol(
  "LiftedEventListenerLike_notify",
);
export const LiftedEventListenerLike_notifyDelegate = Symbol(
  "LiftedEventListenerLike_notifyDelegate",
);

export const LiftedEventListenerLike_delegate = Symbol(
  "LiftedEventListenerLike_delegate",
);

export interface LiftedEventListenerLike<
  TA = unknown,
  TB = TA,
  TDelegateEventListener extends EventListenerLike<TB> = EventListenerLike<TB>,
> extends EventListenerLike<TA> {
  readonly [LiftedEventListenerLike_delegate]: TDelegateEventListener;

  [LiftedEventListenerLike_notify](next: TA): void;
  [LiftedEventListenerLike_notifyDelegate](next: TB): void;
}

interface LiftedEventListenerMixinModule {
  <
    TA,
    TB = TA,
    TDelegateEventListener extends
      EventListenerLike<TB> = EventListenerLike<TB>,
  >(): Mixin1<
    LiftedEventListenerLike<TA, TB, TDelegateEventListener>,
    TDelegateEventListener,
    Pick<
      LiftedEventListenerLike<TA, TB, TDelegateEventListener>,
      keyof DisposableLike
    >
  >;

  <
    T,
    TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>,
  >(): Mixin1<
    LiftedEventListenerLike<T, T, TDelegateEventListener>,
    TDelegateEventListener,
    Pick<
      LiftedEventListenerLike<T, T, TDelegateEventListener>,
      keyof DisposableLike | typeof LiftedEventListenerLike_notify
    >
  >;
}

const LiftedEventListenerMixin: LiftedEventListenerMixinModule =
  /*@__PURE__*/ (<
    TA,
    TB = TA,
    TDelegateEventListener extends
      EventListenerLike<TB> = EventListenerLike<TB>,
  >() => {
    type TProperties = {
      [LiftedEventListenerLike_delegate]: TDelegateEventListener;
    };

    return returns(
      mix<
        LiftedEventListenerLike<TA, TB, TDelegateEventListener>,
        TProperties,
        Pick<
          LiftedEventListenerLike<TA, TB, TDelegateEventListener>,
          | typeof LiftedEventListenerLike_notifyDelegate
          | typeof EventListenerLike_notify
          | typeof LiftedEventListenerLike_notify
        >,
        Pick<
          LiftedEventListenerLike<TA, TB, TDelegateEventListener>,
          keyof DisposableLike
        >,
        TDelegateEventListener
      >(
        function LiftedEventListenerMixin(
          this: TProperties &
            LiftedEventListenerLike<TA, TB, TDelegateEventListener>,
          delegate: TDelegateEventListener,
        ): LiftedEventListenerLike<TA, TB, TDelegateEventListener> {
          this[LiftedEventListenerLike_delegate] = delegate;

          return this;
        },
        props<TProperties>({
          [LiftedEventListenerLike_delegate]: none,
        }),
        proto({
          [LiftedEventListenerLike_notifyDelegate](
            this: TProperties,
            next: TB,
          ) {
            const delegate = this[
              LiftedEventListenerLike_delegate
            ] as unknown as LiftedEventListenerLike<TB>;

            delegate[EventListenerLike_notify](next);
          },

          [EventListenerLike_notify](
            this: TProperties &
              EventListenerLike<TA> &
              QueueLike<TA> &
              SerialDisposableLike &
              LiftedEventListenerLike<TA, TB, TDelegateEventListener>,
            next: TA,
          ) {
            this[LiftedEventListenerLike_notify](next);
          },

          [LiftedEventListenerLike_notify](
            this: TProperties &
              LiftedEventListenerLike<TA, TB, TDelegateEventListener>,
            next: TA,
          ) {
            this[LiftedEventListenerLike_notifyDelegate](next as unknown as TB);
          },
        }),
      ),
    );
  })();

export default LiftedEventListenerMixin;
