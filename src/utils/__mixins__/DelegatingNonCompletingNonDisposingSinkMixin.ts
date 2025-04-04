import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import DelegatingSinkMixin, {
  DelegatingSinkLike,
} from "./DelegatingSinkMixin.js";
import DisposableMixin from "./DisposableMixin.js";

type TReturn<
  T,
  TOut = T,
  TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>,
> = DelegatingSinkLike<T, TOut, TDelegateSink>;

type TPrototype<
  T,
  TOut = T,
  TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>,
> = Omit<
  DelegatingSinkLike<T, TOut, TDelegateSink>,
  | keyof DisposableLike
  | typeof DelegatingEventListenerLike_delegate
  | typeof EventListenerLike_notify
  | typeof SinkLike_isCompleted
>;

const DelegatingNonCompletingNonDisposingSinkMixin: <
  T,
  TOut = T,
  TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>,
>() => Mixin1<
  TReturn<T, TOut, TDelegateSink>,
  TDelegateSink,
  TPrototype<T, TOut, TDelegateSink>
> = /*@__PURE__*/ (<
  T,
  TOut = T,
  TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>,
>() => {
  return returns(
    mix(
      include(DisposableMixin, DelegatingSinkMixin()),
      function DelegatingNonCompletingNonDisposingSinkMixin(
        this: TPrototype<T, TOut, TDelegateSink>,
        delegate: TDelegateSink,
      ): TReturn<T, TOut, TDelegateSink> {
        init(DisposableMixin, this);
        init(DelegatingSinkMixin<T, TOut, TDelegateSink>(), this, delegate);
        return this;
      },
      props(),
      proto({
        get [SinkLike_isCompleted]() {
          unsafeCast<TReturn<T, TOut, TDelegateSink>>(this);
          return (
            this[DisposableLike_isDisposed] ||
            this[DelegatingEventListenerLike_delegate][SinkLike_isCompleted]
          );
        },
        [SinkLike_complete](this: DelegatingSinkLike<T, TDelegateSink>) {
          this[DisposableLike_dispose]();
        },
      }),
    ),
  );
})();

export default DelegatingNonCompletingNonDisposingSinkMixin;
