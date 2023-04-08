import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin1,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DelegatingHotObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import {
  HotObservableLike,
  HotObservableLike_observerCount,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ReplayableLike_buffer,
} from "../../../rx.js";

export type TDelegatingHotObservableReturn<
  T,
  THotObservable extends HotObservableLike<T>,
> = HotObservableLike<T> & {
  [DelegatingHotObservableMixin_delegate]: THotObservable;
};

const HotObservable_delegatingMixin: <
  T,
  THotObservable extends HotObservableLike<T> = HotObservableLike<T>,
>() => Mixin1<
  TDelegatingHotObservableReturn<T, THotObservable>,
  THotObservable
> = /*@__PURE__*/ (<
  T,
  THotObservable extends HotObservableLike<T> = HotObservableLike<T>,
>() => {
  type TProperties = {
    [DelegatingHotObservableMixin_delegate]: THotObservable;
  };
  return returns(
    mix(
      function DelegatingHotObservableMixin(
        instance: HotObservableLike<T> & TProperties,
        delegate: THotObservable,
      ): TDelegatingHotObservableReturn<T, THotObservable> {
        instance[DelegatingHotObservableMixin_delegate] = delegate;

        return instance;
      },
      props<TProperties>({
        [DelegatingHotObservableMixin_delegate]: none,
      }),
      {
        get [HotObservableLike_observerCount](): number {
          unsafeCast<DelegatingLike<HotObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][HotObservableLike_observerCount];
        },

        get [ReplayableLike_buffer]() {
          unsafeCast<DelegatingLike<HotObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ReplayableLike_buffer];
        },

        get [ObservableLike_isEnumerable]() {
          unsafeCast<DelegatingLike<HotObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
        },

        get [ObservableLike_isRunnable]() {
          unsafeCast<DelegatingLike<HotObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isRunnable];
        },

        [ObservableLike_observe](
          this: DelegatingLike<HotObservableLike<T>>,
          observer: ObserverLike<T>,
        ) {
          this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
      },
    ),
  );
})();

export default HotObservable_delegatingMixin;
