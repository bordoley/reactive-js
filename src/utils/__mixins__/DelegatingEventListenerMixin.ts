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
  DelegatingEventListenerLike<T, TDelegateEventListener>,
  TDelegateEventListener,
  DisposableLike
> = /*@__PURE__*/ (<
  T,
  TDelegateEventListener extends EventListenerLike<T> = EventListenerLike<T>,
>() => {
  type TProperties = {
    [DelegatingEventListenerLike_delegate]: TDelegateEventListener;
  };

  return returns(
    mix<
      DelegatingEventListenerLike<T, TDelegateEventListener>,
      TProperties,
      Pick<
        DelegatingEventListenerLike<T, TDelegateEventListener>,
        typeof EventListenerLike_notify
      >,
      DisposableLike,
      TDelegateEventListener
    >(
      function DelegatingEventListenerMixin(
        this: TProperties &
          DelegatingEventListenerLike<T, TDelegateEventListener>,
        delegate: TDelegateEventListener,
      ): DelegatingEventListenerLike<T, TDelegateEventListener> {
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
