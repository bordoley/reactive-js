import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { returns, unsafeCast } from "../../../functions.js";
import {
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  ReplayableLike_buffer,
} from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

export interface DelegatingMulticastLike<
  T,
  TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>,
> extends DelegatingLike<TMulticastObservable>,
    MulticastObservableLike<T> {}

const MulticastObservable_delegatingMixin: <
  T,
  TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>,
>() => Mixin1<
  DelegatingMulticastLike<T, TMulticastObservable>,
  TMulticastObservable
> = /*@__PURE__*/ (<
  T,
  TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>,
>() => {
  return returns(
    mix(
      include(Disposable_delegatingMixin<MulticastObservableLike<T>>()),
      function DelegatingMulticastObservableMixin(
        instance: Pick<
          MulticastObservableLike<T>,
          | typeof MulticastObservableLike_observerCount
          | typeof ReplayableLike_buffer
          | typeof ObservableLike_observe
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
        >,
        delegate: MulticastObservableLike<T>,
      ): DelegatingMulticastLike<T, TMulticastObservable> {
        init(
          Disposable_delegatingMixin<TMulticastObservable>(),
          instance,
          delegate,
        );

        return instance;
      },
      props<unknown>({}),
      {
        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        get [ReplayableLike_buffer]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ReplayableLike_buffer];
        },

        get [ObservableLike_isEnumerable]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
        },

        get [ObservableLike_isRunnable]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isRunnable];
        },

        [ObservableLike_observe](
          this: DelegatingLike<MulticastObservableLike<T>>,
          observer: ObserverLike<T>,
        ) {
          this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
      },
    ),
  );
})();

export default MulticastObservable_delegatingMixin;
