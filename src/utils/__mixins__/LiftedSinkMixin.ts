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
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";
import LiftedEventListenerMixin, {
  LiftedEventListenerLike,
  LiftedEventListenerLike_delegate,
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "./LiftedEventListenerMixin.js";

export const LiftedSinkLike_complete = Symbol("LiftedSinkLike_complete");
export const LiftedSinkLike_completeDelegate = Symbol(
  "LiftedSinkLike_complete",
);

export interface LiftedSinkLike<
  TA = unknown,
  TB = TA,
  TDelegateSink extends SinkLike<TB> = SinkLike<TB>,
> extends LiftedEventListenerLike<TA, TB, TDelegateSink>,
    SinkLike<TA> {
  [LiftedSinkLike_complete](): void;
  [LiftedSinkLike_completeDelegate](): void;
}

interface LiftedSinkMixinModule {
  <TA, TB = TA, TDelegateSink extends SinkLike<TB> = SinkLike<TB>>(): Mixin1<
    LiftedSinkLike<TA, TB, TDelegateSink>,
    TDelegateSink,
    Pick<LiftedSinkLike<TA, TB, TDelegateSink>, keyof DisposableLike>,
    Pick<LiftedSinkLike<TA, TB, TDelegateSink>, typeof SinkLike_complete>
  >;

  <T, TDelegateSink extends SinkLike<T> = SinkLike<T>>(): Mixin1<
    LiftedSinkLike<T, T, TDelegateSink>,
    TDelegateSink,
    Pick<
      LiftedSinkLike<T, T, TDelegateSink>,
      keyof DisposableLike | typeof LiftedEventListenerLike_notify
    >,
    Pick<LiftedSinkLike<T, T, TDelegateSink>, typeof SinkLike_complete>
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
    mix<
      LiftedSinkLike<TA, TB, TDelegateSink>,
      unknown,
      Pick<
        LiftedSinkLike<TA, TB, TDelegateSink>,
        | typeof SinkLike_isCompleted
        | typeof LiftedSinkLike_completeDelegate
        | typeof LiftedSinkLike_complete
        | typeof SinkLike_complete
      >,
      Pick<
        LiftedSinkLike<TA, TB, TDelegateSink>,
        | keyof DisposableLike
        | typeof LiftedEventListenerLike_notify
        | typeof LiftedSinkLike_complete
        | typeof LiftedSinkLike_completeDelegate
      >,
      TDelegateSink
    >(
      include(LiftedEventListenerMixin()),
      function LiftedSinkMixin(
        this: Omit<
          LiftedSinkLike<TA, TB, TDelegateSink>,
          | typeof LiftedEventListenerLike_notify
          | typeof LiftedEventListenerLike_delegate
          | typeof EventListenerLike_notify
          | typeof LiftedEventListenerLike_notifyDelegate
        >,
        delegate: TDelegateSink,
      ): LiftedSinkLike<TA, TB, TDelegateSink> {
        init(LiftedEventListenerMixin<TA, TB, TDelegateSink>(), this, delegate);

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
        [LiftedSinkLike_completeDelegate](
          this: LiftedSinkLike<TA, TB, TDelegateSink>,
        ) {
          // We always want to call SinkLike_complete to ensure
          // cleanup code is invoked.
          this[LiftedEventListenerLike_delegate][SinkLike_complete]();
        },

        [LiftedSinkLike_complete](this: LiftedSinkLike) {
          this[LiftedSinkLike_completeDelegate]();
        },

        [SinkLike_complete](this: LiftedSinkLike<TA, TB, TDelegateSink>) {
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
