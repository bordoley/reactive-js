import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { bindMethod, pipe, returns } from "../../functions.js";
import {
  DisposableLike,
  ListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import LiftedListenerMixin, {
  LiftedListenerLike,
  LiftedListenerLike_delegate,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "./LiftedListenerMixin.js";

export const LiftedSinkLike_complete = Symbol("LiftedSinkLike_complete");
export const LiftedSinkLike_completeDelegate = Symbol(
  "LiftedSinkLike_completeDelegate",
);
export const LiftedSinkLike_isDelegateCompleted = Symbol(
  "LiftedSinkLike_isDelegateCompleted",
);

export interface LiftedSinkLike<
  TA = unknown,
  TB = TA,
  TDelegateSink extends SinkLike<TB> = SinkLike<TB>,
> extends LiftedListenerLike<TA, TB, TDelegateSink>,
    SinkLike<TA> {
  readonly [LiftedSinkLike_isDelegateCompleted]: boolean;
  [LiftedSinkLike_complete](): void;
  [LiftedSinkLike_completeDelegate](): void;
}

interface LiftedSinkMixinModule {
  <TA, TB = TA, TDelegateSink extends SinkLike<TB> = SinkLike<TB>>(): Mixin1<
    LiftedSinkLike<TA, TB, TDelegateSink>,
    TDelegateSink
  >;

  <T, TDelegateSink extends SinkLike<T> = SinkLike<T>>(): Mixin1<
    LiftedSinkLike<T, T, TDelegateSink>,
    TDelegateSink
  >;
}

const LiftedSinkMixin: LiftedSinkMixinModule = /*@__PURE__*/ (<
  TA,
  TB = TA,
  TDelegateSink extends SinkLike<TB> = SinkLike<TB>,
>() => {
  const LiftedSinkMixin_isCompleted = Symbol("LiftedSinkMixin_isCompleted");

  type TProperties = {
    [LiftedSinkMixin_isCompleted]: boolean;
  };

  return returns(
    mix(
      include(LiftedListenerMixin()),
      function LiftedSinkMixin(
        this: TProperties &
          Omit<
            LiftedSinkLike<TA, TB, TDelegateSink>,
            | keyof DisposableLike
            | typeof LiftedListenerLike_notify
            | typeof LiftedListenerLike_delegate
            | typeof ListenerLike_notify
            | typeof LiftedListenerLike_notifyDelegate
          >,
        delegate: TDelegateSink,
      ): LiftedSinkLike<TA, TB, TDelegateSink> {
        init(LiftedListenerMixin<TA, TB, TDelegateSink>(), this, delegate);

        pipe(
          this,
          DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)),
        );

        return this;
      },
      props<TProperties>({
        [LiftedSinkMixin_isCompleted]: false,
      }),
      proto({
        get [SinkLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return this[LiftedSinkMixin_isCompleted];
        },
        get [LiftedSinkLike_isDelegateCompleted](): boolean {
          unsafeCast<LiftedSinkLike<TA, TB, TDelegateSink>>(this);
          return this[LiftedListenerLike_delegate][SinkLike_isCompleted];
        },

        [LiftedSinkLike_completeDelegate](
          this: LiftedSinkLike<TA, TB, TDelegateSink>,
        ) {
          // We always want to call SinkLike_complete to ensure
          // cleanup code is invoked.
          this[LiftedListenerLike_delegate][SinkLike_complete]();
        },
        [LiftedSinkLike_complete](this: LiftedSinkLike<TA, TB, TDelegateSink>) {
          this[LiftedSinkLike_completeDelegate]();
        },

        [SinkLike_complete](this: LiftedSinkLike) {
          const isCompleted = this[SinkLike_isCompleted];

          if (isCompleted) {
            return;
          }

          this[LiftedSinkLike_complete]();
        },
      }),
    ),
  );
})();

export default LiftedSinkMixin;
