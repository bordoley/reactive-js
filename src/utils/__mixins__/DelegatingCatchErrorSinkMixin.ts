import { Mixin1, include, init, mix } from "../../__internal__/mixins.js";
import { bindMethod, pipe, returns } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  EventListenerLike_notify,
  SinkLike,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import DelegatingNonCompletingNonDisposingMixin from "./DelegatingNonCompletingNonDisposingMixin.js";
import { DelegatingSinkLike } from "./DelegatingSinkMixin.js";

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

const DelegatingCatchErrorSinkMixin: <
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
      include(DelegatingNonCompletingNonDisposingMixin()),
      function DelegatingCatchErrorSinkMixin(
        this: TPrototype<T, TOut, TDelegateSink>,
        delegate: TDelegateSink,
      ): TReturn<T, TOut, TDelegateSink> {
        init(
          DelegatingNonCompletingNonDisposingMixin<T, TOut, TDelegateSink>(),
          this,
          delegate,
        );

        pipe(
          this,
          Disposable.addToContainer(delegate),
          DisposableContainer.onComplete(
            bindMethod(delegate, DisposableLike_dispose),
          ),
        );
        return this;
      },
    ),
  );
})();

export default DelegatingCatchErrorSinkMixin;
