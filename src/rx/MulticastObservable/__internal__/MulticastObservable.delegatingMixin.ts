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
  MulticastObservableLike_replay,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import { CollectionLike_count, KeyedCollectionLike_get } from "../../../util.js";
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
          | typeof CollectionLike_count
          | typeof KeyedCollectionLike_get
          | typeof MulticastObservableLike_observerCount
          | typeof MulticastObservableLike_replay
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
        get [CollectionLike_count]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][CollectionLike_count];
        },

        get [MulticastObservableLike_observerCount](): number {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        get [MulticastObservableLike_replay]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][MulticastObservableLike_replay];
        },

        get [ObservableLike_isEnumerable]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
        },

        get [ObservableLike_isRunnable]() {
          unsafeCast<DelegatingLike<MulticastObservableLike<T>>>(this);
          return this[DelegatingLike_delegate][ObservableLike_isRunnable];
        },

        [KeyedCollectionLike_get](
          this: DelegatingLike<MulticastObservableLike<T>>,
          index: number,
        ): T {
          return this[DelegatingLike_delegate][KeyedCollectionLike_get](index);
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
