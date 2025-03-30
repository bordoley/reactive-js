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
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DelegatingEventListenerMixin, {
  DelegatingEventListenerLike,
  DelegatingEventListenerLike_delegate,
} from "./DelegatingEventListenerMixin.js";

export interface DelegatingSinkLike<
  T,
  TOut = T,
  TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>,
> extends DelegatingEventListenerLike<T, TOut, TDelegateSink>,
    SinkLike<T> {}

type TReturn<
  T,
  TOut = T,
  TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>,
> = Omit<DelegatingSinkLike<T, TOut, TDelegateSink>, keyof DisposableLike>;

type TPrototype<
  T,
  TOut = T,
  TDelegateSink extends SinkLike<TOut> = SinkLike<TOut>,
> = Omit<
  DelegatingSinkLike<T, TOut, TDelegateSink>,
  | keyof DisposableLike
  | typeof DelegatingEventListenerLike_delegate
  | typeof EventListenerLike_notify
>;

const DelegatingSinkMixin: <
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
      include(DelegatingEventListenerMixin()),
      function DelegatingSinkMixin(
        this: TPrototype<T, TOut, TDelegateSink>,
        delegate: TDelegateSink,
      ): TReturn<T, TOut, TDelegateSink> {
        init(
          DelegatingEventListenerMixin<T, TOut, TDelegateSink>(),
          this,
          delegate,
        );
        return this;
      },
      props(),
      proto({
        get [SinkLike_isCompleted](): boolean {
          unsafeCast<DelegatingSinkLike<T, TDelegateSink>>(this);
          return this[DelegatingEventListenerLike_delegate][
            SinkLike_isCompleted
          ];
        },

        [SinkLike_complete](this: DelegatingSinkLike<T, TDelegateSink>) {
          this[DelegatingEventListenerLike_delegate][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default DelegatingSinkMixin;
