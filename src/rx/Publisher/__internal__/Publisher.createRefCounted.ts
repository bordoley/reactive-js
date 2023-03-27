import {
  DelegatingLike,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  DelegatingLike_delegate,
  DisposableLike_dispose,
} from "../../../__internal__/symbols.js";
import { pipe, unsafeCast } from "../../../functions.js";
import {
  MulticastObservableLike_observerCount,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
  PublisherLike,
  PublisherLike_publish,
} from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Publisher_create from "./Publisher.create.js";

const Publisher_createRefCounted: <T>(options?: {
  replay?: number;
}) => PublisherLike<T> = /*@__PURE__*/ (<T>() => {
  const createRefCountedPublisherInstance = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin()),
      function RefCountedPublisher(
        instance: Pick<
          PublisherLike<T>,
          | typeof ObservableLike_observe
          | typeof ObservableLike_isEnumerable
          | typeof ObservableLike_isRunnable
          | typeof MulticastObservableLike_observerCount
          | typeof PublisherLike_publish
        >,
        delegate: PublisherLike<T>,
      ): PublisherLike<T> {
        init(Disposable_delegatingMixin(), instance, delegate);

        return instance;
      },
      props({}),
      {
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        get [MulticastObservableLike_observerCount]() {
          unsafeCast<DelegatingLike<PublisherLike<T>>>(this);
          return this[DelegatingLike_delegate][
            MulticastObservableLike_observerCount
          ];
        },

        [PublisherLike_publish](
          this: DelegatingLike<PublisherLike<T>>,
          next: T,
        ) {
          this[DelegatingLike_delegate][PublisherLike_publish](next);
        },

        [ObservableLike_observe](
          this: DelegatingLike<PublisherLike<T>> & PublisherLike<T>,
          observer: ObserverLike<T>,
        ) {
          this[DelegatingLike_delegate][ObservableLike_observe](observer);

          pipe(
            observer,
            Disposable_onDisposed(() => {
              if (this[MulticastObservableLike_observerCount] === 0) {
                this[DisposableLike_dispose]();
              }
            }),
          );
        },
      },
    ),
  );

  return (options?: { replay?: number }): PublisherLike<T> => {
    const delegate = Publisher_create<T>(options);
    return createRefCountedPublisherInstance(delegate);
  };
})();

export default Publisher_createRefCounted;
