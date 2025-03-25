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
  TDelegateSink extends SinkLike<T> = SinkLike<T>,
> extends DelegatingEventListenerLike<T, TDelegateSink>,
    SinkLike<T> {}

type TReturn<T, TDelegateSink extends SinkLike<T> = SinkLike<T>> = Omit<
  DelegatingSinkLike<T, TDelegateSink>,
  keyof DisposableLike
>;

type TPrototype<T, TDelegateSink extends SinkLike<T> = SinkLike<T>> = Omit<
  DelegatingSinkLike<T, TDelegateSink>,
  | keyof DisposableLike
  | typeof DelegatingEventListenerLike_delegate
  | typeof EventListenerLike_notify
>;

const DelegatingSinkMixin: <
  T,
  TDelegateSink extends SinkLike<T> = SinkLike<T>,
>() => Mixin1<
  TReturn<T, TDelegateSink>,
  TDelegateSink,
  TPrototype<T, TDelegateSink>
> = /*@__PURE__*/ (<T, TDelegateSink extends SinkLike<T> = SinkLike<T>>() => {
  return returns(
    mix(
      include(DelegatingEventListenerMixin()),
      function DelegatingSinkMixin(
        this: TPrototype<T, TDelegateSink>,
        delegate: TDelegateSink,
      ): TReturn<T, TDelegateSink> {
        init(DelegatingEventListenerMixin<T, TDelegateSink>(), this, delegate);
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
