import {
  Mutable,
  createInstanceFactory,
  include,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ContainerOperator } from "../../../containers.js";
import { Optional, none, pipe, unsafeCast } from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  MulticastObservableLike,
  MulticastObservableLike_observerCount,
  ObservableLike,
  ObservableLike_isEnumerable,
  ObservableLike_isRunnable,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { StreamLike } from "../../../streaming.js";
import {
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";

const AsyncEnumerator_create: <TA, TB>(
  stream: StreamLike<void, TA>,
  op: ContainerOperator<ObservableLike, TA, TB>,
) => StreamLike<void, TB> = /*@__PURE__*/ (<TA, TB>() => {
  const AsyncEnumeratorDelegatingMixin_src = Symbol(
    "AsyncEnumeratorDelegatingMixin_src",
  );
  const AsyncEnumeratorDelegatingMixin_observable = Symbol(
    "AsyncEnumeratorDelegatingMixin_observable",
  );

  type TProperties = {
    readonly [AsyncEnumeratorDelegatingMixin_src]: StreamLike<void, TA>;
    readonly [AsyncEnumeratorDelegatingMixin_observable]: MulticastObservableLike<TB>;
    readonly [DisposableLike_isDisposed]: boolean;
  };

  return createInstanceFactory(
    mix(
      include(Disposable_delegatingMixin()),
      function AsyncEnumeratorDelegatingMixin(
        instance: Omit<StreamLike<void, TB>, typeof DisposableLike_isDisposed> &
          Mutable<TProperties>,
        delegate: StreamLike<void, TA>,
        operator: ContainerOperator<ObservableLike, TA, TB>,
      ): StreamLike<void, TB> {
        instance[AsyncEnumeratorDelegatingMixin_src] = delegate;

        instance[AsyncEnumeratorDelegatingMixin_observable] = pipe(
          delegate,
          operator,
          Observable_multicast(delegate[DispatcherLike_scheduler], {
            maxBufferSize: delegate[QueueableLike_maxBufferSize],
          }),
          Disposable_add(delegate),
          Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
          }),
        );

        return instance;
      },
      props<TProperties>({
        [AsyncEnumeratorDelegatingMixin_src]: none,
        [AsyncEnumeratorDelegatingMixin_observable]: none,
        [DisposableLike_isDisposed]: false,
      }),
      {
        [ObservableLike_isEnumerable]: false as const,
        [ObservableLike_isRunnable]: false as const,

        get [DispatcherLike_scheduler]() {
          unsafeCast<TProperties>(this);
          return this[AsyncEnumeratorDelegatingMixin_src][
            DispatcherLike_scheduler
          ];
        },

        get [DisposableLike_error](): Optional<Error> {
          unsafeCast<TProperties>(this);
          return this[AsyncEnumeratorDelegatingMixin_observable][
            DisposableLike_error
          ];
        },

        get [QueueableLike_maxBufferSize](): number {
          unsafeCast<TProperties>(this);
          return this[AsyncEnumeratorDelegatingMixin_src][
            QueueableLike_maxBufferSize
          ];
        },

        get [MulticastObservableLike_observerCount]() {
          unsafeCast<TProperties>(this);
          return this[AsyncEnumeratorDelegatingMixin_observable][
            MulticastObservableLike_observerCount
          ];
        },

        [DisposableLike_add](
          this: TProperties,
          disposable: DisposableOrTeardown,
          ignoreChildErrors: boolean,
        ) {
          this[AsyncEnumeratorDelegatingMixin_observable][DisposableLike_add](
            disposable,
            ignoreChildErrors,
          );
        },

        [DisposableLike_dispose](this: TProperties, error?: Error) {
          this[AsyncEnumeratorDelegatingMixin_observable][
            DisposableLike_dispose
          ](error);
        },

        [DispatcherLike_complete](this: TProperties) {
          this[AsyncEnumeratorDelegatingMixin_src][DispatcherLike_complete]();
        },

        [QueueableLike_push](this: TProperties, next: void): boolean {
          return this[AsyncEnumeratorDelegatingMixin_src][QueueableLike_push](
            next,
          );
        },

        [ObservableLike_observe](
          this: TProperties,
          observer: ObserverLike<TB>,
        ): void {
          this[AsyncEnumeratorDelegatingMixin_observable][
            ObservableLike_observe
          ](observer);
        },
      },
    ),
  );
})();

export default AsyncEnumerator_create;
