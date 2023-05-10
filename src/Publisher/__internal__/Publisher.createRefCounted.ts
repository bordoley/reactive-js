import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import MulticastObservable_delegatingMixin from "../../MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import type * as Publisher from "../../Publisher.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { pipe, unsafeCast } from "../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike_isErrorSafe,
  EventListenerLike_notify,
  ObservableLike_observe,
  ObserverLike,
  PublisherLike,
  PublisherLike_observerCount,
} from "../../types.js";
import Publisher_create from "./Publisher.create.js";

const Publisher_createRefCounted: Publisher.Signature["createRefCounted"] =
  /*@__PURE__*/ (<T>() => {
    const createRefCountedPublisherInstance = createInstanceFactory(
      mix(
        include(
          Disposable_delegatingMixin,
          MulticastObservable_delegatingMixin(),
          Delegating_mixin(),
        ),
        function RefCountedPublisher(
          instance: Pick<
            PublisherLike<T>,
            | typeof EventListenerLike_isErrorSafe
            | typeof EventListenerLike_notify
            | typeof ObservableLike_observe
            | typeof PublisherLike_observerCount
          >,
          delegate: PublisherLike<T>,
        ): PublisherLike<T> {
          init(Disposable_delegatingMixin, instance, delegate);
          init(MulticastObservable_delegatingMixin<T>(), instance, delegate);
          init(Delegating_mixin(), instance, delegate);

          return instance;
        },
        props({}),
        {
          get [PublisherLike_observerCount](): number {
            unsafeCast<DelegatingLike<PublisherLike<T>>>(this);
            return this[DelegatingLike_delegate][PublisherLike_observerCount];
          },

          [EventListenerLike_isErrorSafe]: true as const,

          [EventListenerLike_notify](
            this: DelegatingLike<PublisherLike<T>>,
            next: T,
          ) {
            this[DelegatingLike_delegate][EventListenerLike_notify](next);
          },

          [ObservableLike_observe](
            this: DelegatingLike<PublisherLike<T>> & PublisherLike<T>,
            observer: ObserverLike<T>,
          ) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);

            pipe(
              observer,
              Disposable_onDisposed(() => {
                if (this[PublisherLike_observerCount] === 0) {
                  this[DisposableLike_dispose]();
                }
              }),
            );
          },
        },
      ),
    );

    return (options?: { readonly replay?: number }) => {
      const delegate = Publisher_create<T>(options);
      return createRefCountedPublisherInstance(delegate);
    };
  })();

export default Publisher_createRefCounted;
