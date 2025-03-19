import {
  Mixin1,
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
import DelegatingListenerMixin, {
  DelegatingListenerLike,
  DelegatingListenerLike_delegate,
} from "./DelegatingListenerMixin.js";

export interface DelegatingSinkLike<
  T,
  TDelegateSink extends SinkLike<T> = SinkLike<T>,
> extends DelegatingListenerLike<T, TDelegateSink>,
    SinkLike<T> {}

const DelegatingSinkMixin: <
  T,
  TDelegateSink extends SinkLike<T> = SinkLike<T>,
>() => Mixin1<
  DelegatingSinkLike<T, TDelegateSink>,
  TDelegateSink,
  DisposableLike
> = /*@__PURE__*/ (<T, TDelegateSink extends SinkLike<T> = SinkLike<T>>() => {
  return returns(
    mix<
      DelegatingSinkLike<T, TDelegateSink>,
      unknown,
      Pick<
        DelegatingSinkLike<T, TDelegateSink>,
        typeof SinkLike_isCompleted | typeof SinkLike_complete
      >,
      DisposableLike,
      TDelegateSink
    >(
      function DelegatingSinkMixin(
        this: Pick<
          DelegatingSinkLike<T, TDelegateSink>,
          typeof SinkLike_isCompleted | typeof SinkLike_complete
        > &
          DisposableLike,
        delegate: TDelegateSink,
      ): DelegatingSinkLike<T, TDelegateSink> {
        init(DelegatingListenerMixin<T, TDelegateSink>(), this, delegate);

        return this;
      },
      props(),
      proto({
        get [SinkLike_isCompleted](): boolean {
          unsafeCast<DelegatingSinkLike<T, TDelegateSink>>(this);
          return this[DelegatingListenerLike_delegate][SinkLike_isCompleted];
        },

        [SinkLike_complete](this: DelegatingSinkLike<T, TDelegateSink>) {
          this[DelegatingListenerLike_delegate][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default DelegatingSinkMixin;
