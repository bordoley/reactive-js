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

const DelegatingSinkMixin: <
  T,
  TDelegateSink extends SinkLike<T> = SinkLike<T>,
>() => Mixin1<
  DelegatingSinkLike<T, TDelegateSink>,
  TDelegateSink,
  DisposableLike
> = /*@__PURE__*/ (<T, TDelegateSink extends SinkLike<T> = SinkLike<T>>() =>
  returns(
    mix<
      DelegatingSinkLike<T, TDelegateSink>,
      ReturnType<typeof DelegatingEventListenerMixin>,
      unknown,
      Pick<
        DelegatingSinkLike<T, TDelegateSink>,
        typeof SinkLike_complete | typeof SinkLike_isCompleted
      >,
      DisposableLike,
      TDelegateSink
    >(
      include(DelegatingEventListenerMixin()),
      function DelegatingSinkMixin(
        this: Pick<
          DelegatingSinkLike<T, TDelegateSink>,
          typeof SinkLike_isCompleted | typeof SinkLike_complete
        > &
          DisposableLike,
        delegate: TDelegateSink,
      ): DelegatingSinkLike<T, TDelegateSink> {
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
  ))();

export default DelegatingSinkMixin;
