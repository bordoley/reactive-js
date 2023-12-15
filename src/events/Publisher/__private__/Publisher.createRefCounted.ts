import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  EventSourceLike_addEventListener,
  PublisherLike,
  PublisherLike_listenerCount,
  SinkLike_notify,
} from "../../../events.js";
import { pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Publisher from "../../Publisher.js";
import Publisher_create from "./Publisher.create.js";

const Publisher_createRefCounted: Publisher.Signature["createRefCounted"] =
  /*@__PURE__*/ (<T>() => {
    const createRefCountedEventPublisherInstance = createInstanceFactory(
      mix(
        include(DelegatingDisposableMixin<PublisherLike<T>>()),
        function RefCountedEventPublisher(
          instance: Pick<
            PublisherLike<T>,
            | typeof EventSourceLike_addEventListener
            | typeof EventListenerLike_isErrorSafe
            | typeof SinkLike_notify
            | typeof PublisherLike_listenerCount
          >,
          delegate: PublisherLike<T>,
        ): PublisherLike<T> {
          init(
            DelegatingDisposableMixin<PublisherLike<T>>(),
            instance,
            delegate,
          );

          return instance;
        },
        props({}),
        {
          [EventListenerLike_isErrorSafe]: true as const,

          get [PublisherLike_listenerCount]() {
            unsafeCast<DelegatingDisposableLike<PublisherLike<T>>>(this);
            return this[DelegatingDisposableLike_delegate][
              PublisherLike_listenerCount
            ];
          },
          [SinkLike_notify](
            this: DelegatingDisposableLike<PublisherLike<T>>,
            next: T,
          ) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
          },

          [EventSourceLike_addEventListener](
            this: DelegatingDisposableLike<PublisherLike<T>> & PublisherLike<T>,
            listener: EventListenerLike<T>,
          ) {
            this[DelegatingDisposableLike_delegate][
              EventSourceLike_addEventListener
            ](listener);

            pipe(
              listener,
              Disposable.onDisposed(() => {
                if (this[PublisherLike_listenerCount] === 0) {
                  this[DisposableLike_dispose]();
                }
              }),
            );
          },
        },
      ),
    );

    return (): PublisherLike<T> => {
      const delegate = Publisher_create<T>();
      return createRefCountedEventPublisherInstance(delegate);
    };
  })();

export default Publisher_createRefCounted;
