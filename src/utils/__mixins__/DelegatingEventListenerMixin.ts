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
  TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>,
> extends EventListenerLike<T> {
  readonly [DelegatingEventListenerLike_delegate]: TDelegateEventListener;
}

const DelegatingEventListenerMixin: <
  T,
  TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>,
>() => Mixin1<
  Omit<
    DelegatingEventListenerLike<T, TDelegateEventListener>,
    keyof DisposableLike
  >,
  TDelegateEventListener
> = /*@__PURE__*/ (<
  T,
  TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>,
>() => {
  type TProperties = {
    [DelegatingEventListenerLike_delegate]: TDelegateEventListener;
  };

  return returns(
    mix(
      function DelegatingEventListenerMixin(
        this: TProperties &
          Omit<
            DelegatingEventListenerLike<T, TDelegateEventListener>,
            keyof DisposableLike
          >,
        delegate: TDelegateEventListener,
      ): Omit<
        DelegatingEventListenerLike<T, TDelegateEventListener>,
        keyof DisposableLike
      > {
        this[DelegatingEventListenerLike_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingEventListenerLike_delegate]: none,
      }),
      proto({
        [EventListenerLike_notify](
          this: TProperties &
            DelegatingEventListenerLike<T, TDelegateEventListener>,
          next: T,
        ) {
          this[DelegatingEventListenerLike_delegate][EventListenerLike_notify](
            next,
          );
        },
      }),
    ),
  );
})();

export default DelegatingEventListenerMixin;
