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
import { pipe } from "../../../functions.js";
import {
  HotObservableLike_observerCount,
  ObservableLike_observe,
  ObserverLike,
  PublisherLike,
} from "../../../rx.js";
import { EventListenerLike_notify } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import HotObservable_delegatingMixin from "../../HotObservable/__internal__/HotObservable.delegatingMixin.js";
import Publisher_create from "./Publisher.create.js";

const Publisher_createRefCounted: <T>(options?: {
  readonly replay?: number;
}) => PublisherLike<T> = /*@__PURE__*/ (<T>() => {
  const createRefCountedPublisherInstance = createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin(), HotObservable_delegatingMixin()),
      function RefCountedPublisher(
        instance: Pick<
          PublisherLike<T>,
          typeof ObservableLike_observe | typeof EventListenerLike_notify
        >,
        delegate: PublisherLike<T>,
      ): PublisherLike<T> {
        init(Disposable_delegatingMixin(), instance, delegate);
        init(
          HotObservable_delegatingMixin<T, PublisherLike<T>>(),
          instance,
          delegate,
        );

        return instance;
      },
      props({}),
      {
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
              if (this[HotObservableLike_observerCount] === 0) {
                this[DisposableLike_dispose]();
              }
            }),
          );
        },
      },
    ),
  );

  return (options?: { readonly replay?: number }): PublisherLike<T> => {
    const delegate = Publisher_create<T>(options);
    return createRefCountedPublisherInstance(delegate);
  };
})();

export default Publisher_createRefCounted;
