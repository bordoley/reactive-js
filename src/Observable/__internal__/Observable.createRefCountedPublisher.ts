import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import type * as Observable from "../../Observable.js";
import ReplayObservable_delegatingMixin from "../../ReplayObservable/__internal__/ReplayObservable.delegatingMixin.js";
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
  ObservableLike_observe,
  ObserverLike,
  PublisherLike,
  PublisherLike_observerCount,
  SinkLike_notify,
} from "../../types.js";
import Observable_createPublisher from "./Observable.createPublisher.js";

const Observable_createRefCountedPublisher: Observable.Signature["createRefCountedPublisher"] =
  /*@__PURE__*/ (<T>() => {
    const createRefCountedPublisherInstance = createInstanceFactory(
      mix(
        include(
          Disposable_delegatingMixin,
          ReplayObservable_delegatingMixin(),
          Delegating_mixin(),
        ),
        function RefCountedPublisher(
          instance: Pick<
            PublisherLike<T>,
            | typeof EventListenerLike_isErrorSafe
            | typeof SinkLike_notify
            | typeof ObservableLike_observe
            | typeof PublisherLike_observerCount
          >,
          delegate: PublisherLike<T>,
        ): PublisherLike<T> {
          init(Disposable_delegatingMixin, instance, delegate);
          init(ReplayObservable_delegatingMixin<T>(), instance, delegate);
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

          [SinkLike_notify](this: DelegatingLike<PublisherLike<T>>, next: T) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
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
      const delegate = Observable_createPublisher<T>(options);
      return createRefCountedPublisherInstance(delegate);
    };
  })();

export default Observable_createRefCountedPublisher;
