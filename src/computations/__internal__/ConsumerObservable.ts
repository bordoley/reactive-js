import {
  Mutable,
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
  EventSourceLike_subscribe,
  PublisherLike,
  PureObservableLike,
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
import DelegatingConsumerMixin, {
  DelegatingConsumerLike,
} from "../../utils/__mixins__/DelegatingConsumerMixin.js";
import { DelegatingEventListenerLike_delegate } from "../../utils/__mixins__/DelegatingEventListenerMixin.js";
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
  const ConsumerObservable_onReadyPublisher = Symbol(
    "ConsumerObservable_onReadyPublisher",
  );

  type TProperties = {
    [ConsumerObservable_onReadyPublisher]: PublisherLike<void>;
  };

  type TPrototype = Pick<ConsumerObservableLike<T>, keyof PureObservableLike>;

  return mixInstanceFactory(
    include(DisposableMixin, DelegatingConsumerMixin()),
    function ConsumerObservable(
      this: TPrototype & TProperties,
      config: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ConsumerObservableLike<T> {
      init(DisposableMixin, this);

      const queue = pipe(Consumer.create(config), Disposable.addTo(this));
      init(DelegatingConsumerMixin<T>(), this, queue);

      const onReadyPublisher = pipe(Publisher.create(), Disposable.addTo(this));
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
      [ConsumerObservable_onReadyPublisher]: none,
    }),
    {
      [ComputationLike_isPure]: true as const,
      [ComputationLike_isDeferred]: true as const,
      [ComputationLike_isSynchronous]: false as const,

      [EventSourceLike_subscribe](
        this: ConsumerObservableLike<T> &
          TProperties &
          Mutable<DelegatingConsumerLike<T>>,
        observer: ObserverLike<T>,
      ) {
        const oldDelegate = this[DelegatingEventListenerLike_delegate];
        this[DelegatingEventListenerLike_delegate] = observer;
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
