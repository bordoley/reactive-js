import {
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  PublisherLike,
  PureObservableLike,
  SourceLike_subscribe,
} from "../../computations.js";
import {
  Optional,
  SideEffect1,
  bindMethod,
  isSome,
  none,
  pipe,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Consumer from "../../utils/__internal__/Consumer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_backpressureStrategy,
  FlowControllerLike_capacity,
  FlowControllerLike_isReady,
  ObserverLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Publisher from "../Publisher.js";

export interface ConsumerObservableLike<out T>
  extends PureObservableLike<T>,
    ConsumerLike,
    DisposableLike {}

export const create: <T>(config?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerObservableLike<T> = (<T>() => {
  const ConsumerObservable_delegate = Symbol("ConsumerObservable_delegate");
  const ConsumerObservable_onReadyPublisher = Symbol(
    "ConsumerObservable_onReadyPublisher",
  );

  type TProperties = {
    [ConsumerObservable_delegate]: ConsumerLike<T>;
    [ConsumerObservable_onReadyPublisher]: PublisherLike<void>;
  };

  return mixInstanceFactory(
    include(DisposableMixin),
    function ConsumerObservable(
      this: Omit<ConsumerObservableLike<T>, keyof DisposableLike> & TProperties,
      config: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ConsumerObservableLike<T> {
      init(DisposableMixin, this);

      const onReadyPublisher = pipe(Publisher.create(), Disposable.addTo(this));
      const queue = pipe(Consumer.create(config), Disposable.addTo(this));

      this[ConsumerObservable_delegate] = queue;
      this[ConsumerObservable_onReadyPublisher] = onReadyPublisher;

      pipe(
        queue[FlowControllerLike_addOnReadyListener](
          bindMethod(onReadyPublisher, EventListenerLike_notify),
        ),
        Disposable.addTo(this),
      );

      return this;
    },
    props<TProperties>({
      [ConsumerObservable_delegate]: none,
      [ConsumerObservable_onReadyPublisher]: none,
    }),
    {
      [ComputationLike_isPure]: true as const,
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      get [FlowControllerLike_backpressureStrategy]() {
        unsafeCast<TProperties>(this);
        return this[ConsumerObservable_delegate][
          FlowControllerLike_backpressureStrategy
        ];
      },

      get [FlowControllerLike_capacity]() {
        unsafeCast<TProperties>(this);
        return this[ConsumerObservable_delegate][FlowControllerLike_capacity];
      },

      get [FlowControllerLike_isReady]() {
        unsafeCast<TProperties>(this);
        return this[ConsumerObservable_delegate][FlowControllerLike_isReady];
      },

      get [SinkLike_isCompleted]() {
        unsafeCast<TProperties>(this);
        return this[ConsumerObservable_delegate][SinkLike_isCompleted];
      },

      [SourceLike_subscribe](
        this: ConsumerObservableLike<T> & TProperties,
        observer: ObserverLike<T>,
      ) {
        const oldDelegate = this[ConsumerObservable_delegate];
        this[ConsumerObservable_delegate] = observer;
        pipe(this, Disposable.bindTo(observer));

        pipe(
          observer[FlowControllerLike_addOnReadyListener](
            bindMethod(
              this[ConsumerObservable_onReadyPublisher],
              EventListenerLike_notify,
            ),
          ),
          Disposable.addTo(this),
        );

        if (isSome((oldDelegate as any)[EnumeratorLike_moveNext])) {
          unsafeCast<EnumeratorLike<T>>(oldDelegate);

          while (oldDelegate[EnumeratorLike_moveNext]()) {
            const v = oldDelegate[EnumeratorLike_current];
            observer[EventListenerLike_notify](v);
          }
        }

        if (oldDelegate[SinkLike_isCompleted]) {
          observer[SinkLike_complete]();
        }

        oldDelegate[DisposableLike_dispose]();
      },

      [SinkLike_complete](this: TProperties & DisposableLike) {
        this[ConsumerObservable_delegate][SinkLike_complete]();
      },

      [EventListenerLike_notify](this: TProperties, v: T): void {
        this[ConsumerObservable_delegate][EventListenerLike_notify](v);
      },

      [FlowControllerLike_addOnReadyListener](
        this: TProperties & DisposableLike,
        callback: SideEffect1<void>,
      ) {
        return pipe(
          this[ConsumerObservable_onReadyPublisher],
          Broadcaster.addEventHandler(callback),
          Disposable.addTo(this),
        );
      },
    },
  );
})();
