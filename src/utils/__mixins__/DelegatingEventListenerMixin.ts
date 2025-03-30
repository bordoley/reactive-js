import { Mixin1, mix, props, proto } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  DisposableLike,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../utils.js";

export const DelegatingEventListenerLike_delegate = Symbol(
  "DelegatingEventListenerLike_delegate",
);

export interface DelegatingEventListenerLike<
  T,
  TOut = T,
  TDelegateEventListener extends
    EventListenerLike<TOut> = EventListenerLike<TOut>,
> extends EventListenerLike<T> {
  readonly [DelegatingEventListenerLike_delegate]: TDelegateEventListener;
}

type TReturn<
  T,
  TOut = T,
  TDelegateEventListener extends
    EventListenerLike<TOut> = EventListenerLike<TOut>,
> = Omit<
  DelegatingEventListenerLike<T, TOut, TDelegateEventListener>,
  keyof DisposableLike
>;

type TPrototype<
  T,
  TOut = T,
  TDelegateEventListener extends
    EventListenerLike<TOut> = EventListenerLike<TOut>,
> = Omit<
  DelegatingEventListenerLike<T, TOut, TDelegateEventListener>,
  keyof DisposableLike | typeof DelegatingEventListenerLike_delegate
>;

const DelegatingEventListenerMixin: <
  T,
  TOut = T,
  TDelegateEventListener extends
    EventListenerLike<TOut> = EventListenerLike<TOut>,
>() => Mixin1<
  TReturn<T, TOut, TDelegateEventListener>,
  TDelegateEventListener,
  TPrototype<T, TOut, TDelegateEventListener>
> = /*@__PURE__*/ (<
  T,
  TOut = T,
  TDelegateEventListener extends
    EventListenerLike<TOut> = EventListenerLike<TOut>,
>() => {
  type TProperties = {
    [DelegatingEventListenerLike_delegate]: TDelegateEventListener;
  };

  return returns(
    mix(
      function DelegatingEventListenerMixin(
        this: TProperties & TPrototype<T, TOut, TDelegateEventListener>,
        delegate: TDelegateEventListener,
      ): TReturn<T, TOut, TDelegateEventListener> {
        this[DelegatingEventListenerLike_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingEventListenerLike_delegate]: none,
      }),
      proto({
        [EventListenerLike_notify](
          this: TProperties &
            DelegatingEventListenerLike<T, TOut, TDelegateEventListener>,
          next: T,
        ) {
          this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](
            next as unknown as TOut,
          );
        },
      }),
    ),
  );
})();

export default DelegatingEventListenerMixin;
