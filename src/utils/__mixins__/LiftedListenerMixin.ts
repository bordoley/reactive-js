import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  DisposableLike,
  ListenerLike,
  ListenerLike_notify,
} from "../../utils.js";
import DelegatingDisposableMixin from "./DelegatingDisposableMixin.js";

export const LiftedListenerLike_notify = Symbol("LiftedListenerLike_notify");
export const LiftedListenerLike_notifyDelegate = Symbol(
  "LiftedListenerLike_notifyDelegate",
);
export const LiftedListenerLike_delegate = Symbol(
  "LiftedListenerLike_delegate",
);

export interface LiftedListenerLike<
  TA = unknown,
  TB = TA,
  TDelegateListener extends ListenerLike<TB> = ListenerLike<TB>,
> extends ListenerLike<TA> {
  readonly [LiftedListenerLike_delegate]: TDelegateListener;

  [LiftedListenerLike_notify](next: TA): void;
  [LiftedListenerLike_notifyDelegate](next: TB): void;
}

interface LiftedListenerMixinModule {
  <
    TA,
    TB = TA,
    TDelegateListener extends ListenerLike<TB> = ListenerLike<TB>,
  >(): Mixin1<LiftedListenerLike<TA, TB, TDelegateListener>, TDelegateListener>;

  <T, TDelegateListener extends ListenerLike<T> = ListenerLike<T>>(): Mixin1<
    LiftedListenerLike<T, T, TDelegateListener>,
    TDelegateListener
  >;
}

const LiftedListenerMixin: LiftedListenerMixinModule = /*@__PURE__*/ (<
  TA,
  TB = TA,
  TDelegateListener extends ListenerLike<TB> = ListenerLike<TB>,
>() => {
  type TProperties = {
    [LiftedListenerLike_delegate]: TDelegateListener;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin),
      function LiftedListenerMixin(
        this: TProperties &
          Omit<
            LiftedListenerLike<TA, TB, TDelegateListener>,
            keyof DisposableLike
          >,
        delegate: TDelegateListener,
      ): LiftedListenerLike<TA, TB, TDelegateListener> {
        init(DelegatingDisposableMixin, this, delegate);
        this[LiftedListenerLike_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [LiftedListenerLike_delegate]: none,
      }),
      proto({
        [LiftedListenerLike_notifyDelegate](
          this: LiftedListenerLike<TA, TB, TDelegateListener>,
          next: TB,
        ) {
          const delegate = this[
            LiftedListenerLike_delegate
          ] as unknown as LiftedListenerLike<TB>;

          delegate[ListenerLike_notify](next);
        },

        [ListenerLike_notify](
          this: LiftedListenerLike<TA, TB, TDelegateListener>,
          next: TA,
        ) {
          this[LiftedListenerLike_notify](next);
        },

        [LiftedListenerLike_notify](
          this: LiftedListenerLike<TA, TB, TDelegateListener>,
          next: TA,
        ) {
          this[LiftedListenerLike_notifyDelegate](next as unknown as TB);
        },
      }),
    ),
  );
})();

export default LiftedListenerMixin;
