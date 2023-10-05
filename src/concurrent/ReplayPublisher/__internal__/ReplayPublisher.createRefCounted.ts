import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike_observe,
  ObserverLike,
  ReplayPublisherLike,
  ReplayPublisherLike_observerCount,
} from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import { EventListenerLike_isErrorSafe, SinkLike_notify } from "../../../rx.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
  DisposableLike_dispose,
} from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as ReplayPublisher from "../../ReplayPublisher.js";
import DelegatingReplayObservableMixin from "../../__mixins__/DelegatingReplayObservableMixin.js";
import ReplayPublisher_create from "./ReplayPublisher.create.js";

const ReplayPublisher_createRefCounted: ReplayPublisher.Signature["createRefCounted"] =
  /*@__PURE__*/ (<T>() => {
    const createRefCountedPublisherInstance = createInstanceFactory(
      mix(
        include(
          DelegatingDisposableMixin<ReplayPublisherLike<T>>(),
          DelegatingReplayObservableMixin(),
        ),
        function RefCountedPublisher(
          instance: Pick<
            ReplayPublisherLike<T>,
            | typeof EventListenerLike_isErrorSafe
            | typeof SinkLike_notify
            | typeof ObservableLike_observe
            | typeof ReplayPublisherLike_observerCount
          >,
          delegate: ReplayPublisherLike<T>,
        ): ReplayPublisherLike<T> {
          init(
            DelegatingDisposableMixin<ReplayPublisherLike<T>>(),
            instance,
            delegate,
          );
          init(DelegatingReplayObservableMixin<T>(), instance, delegate);

          return instance;
        },
        props({}),
        {
          get [ReplayPublisherLike_observerCount](): number {
            unsafeCast<DelegatingDisposableLike<ReplayPublisherLike<T>>>(this);
            return this[DelegatingDisposableLike_delegate][
              ReplayPublisherLike_observerCount
            ];
          },

          [EventListenerLike_isErrorSafe]: true as const,

          [SinkLike_notify](
            this: DelegatingDisposableLike<ReplayPublisherLike<T>>,
            next: T,
          ) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
          },

          [ObservableLike_observe](
            this: DelegatingDisposableLike<ReplayPublisherLike<T>> &
              ReplayPublisherLike<T>,
            observer: ObserverLike<T>,
          ) {
            this[DelegatingDisposableLike_delegate][ObservableLike_observe](
              observer,
            );

            pipe(
              observer,
              Disposable.onDisposed(() => {
                if (this[ReplayPublisherLike_observerCount] === 0) {
                  this[DisposableLike_dispose]();
                }
              }),
            );
          },
        },
      ),
    );

    return (options?: { readonly replay?: number }) => {
      const delegate = ReplayPublisher_create<T>(options);
      return createRefCountedPublisherInstance(delegate);
    };
  })();

export default ReplayPublisher_createRefCounted;
