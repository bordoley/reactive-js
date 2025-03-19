import { Mixin1, mix, props, proto } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import {
  DisposableLike,
  ListenerLike,
  ListenerLike_notify,
} from "../../utils.js";

export const DelegatingListenerLike_delegate = Symbol(
  "DelegatingListenerLike_delegate",
);

export interface DelegatingListenerLike<
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
> extends ListenerLike<T> {
  readonly [DelegatingListenerLike_delegate]: TDelegateListener;
}

const DelegatingListenerMixin: <
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => Mixin1<
  DelegatingListenerLike<T, TDelegateListener>,
  TDelegateListener,
  DisposableLike
> = /*@__PURE__*/ (<
  T,
  TDelegateListener extends ListenerLike<T> = ListenerLike<T>,
>() => {
  type TProperties = {
    [DelegatingListenerLike_delegate]: TDelegateListener;
  };

  return returns(
    mix<
      DelegatingListenerLike<T, TDelegateListener>,
      TProperties,
      Pick<
        DelegatingListenerLike<T, TDelegateListener>,
        typeof ListenerLike_notify
      >,
      DisposableLike,
      TDelegateListener
    >(
      function DelegatingListenerMixin(
        this: TProperties & DelegatingListenerLike<T, TDelegateListener>,
        delegate: TDelegateListener,
      ): DelegatingListenerLike<T, TDelegateListener> {
        this[DelegatingListenerLike_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingListenerLike_delegate]: none,
      }),
      proto({
        [ListenerLike_notify](
          this: TProperties & DelegatingListenerLike<T, TDelegateListener>,
          next: T,
        ) {
          this[DelegatingListenerLike_delegate][ListenerLike_notify](next);
        },
      }),
    ),
  );
})();

export default DelegatingListenerMixin;
