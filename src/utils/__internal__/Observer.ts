import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Reducer, none } from "../../functions.js";
import {
  CollectionEnumeratorLike,
  EventListenerLike_notify,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  ObserverLike,
  SchedulerLike,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import { CollectorSinkMixin } from "../__mixins__/CollectorSinkMixin.js";
import DelegatingNotifyOnlyNonCompletingNonDisposingConsumer from "../__mixins__/DelegatingNotifyOnlyNonCompletingNonDisposingConsumer.js";
import DelegatingSchedulerMixin from "../__mixins__/DelegatingSchedulerMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import DisposeOnCompleteSinkMixin from "../__mixins__/DisposeOnCompleteSinkMixin.js";
import { ReducerSinkMixin } from "../__mixins__/ReducerSinkMixin.js";
import TakeLastConsumerMixin from "../__mixins__/TakeLastConsumerMixin.js";

export const collect: <T>(
  buffer: T[],
  scheduler: SchedulerLike,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    ObserverLike<T>,
    | typeof FlowControllerLike_isReady
    | typeof FlowControllerLike_addOnReadyListener
  >;

  return mixInstanceFactory(
    include(CollectorSinkMixin(), DelegatingSchedulerMixin),
    function CollectObserver(
      this: TPrototype,
      buffer: T[],
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(CollectorSinkMixin(), this, buffer);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
    props(),
    proto<TPrototype>({
      [FlowControllerLike_isReady]: true as const,
      [FlowControllerLike_addOnReadyListener]() {
        return Disposable.disposed;
      },
    }),
  );
})();

export const create: <T>(
  notify: (this: ObserverLike<T>, next: T) => void,
  scheduler: SchedulerLike,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [EventListenerLike_notify]: (this: ObserverLike<T>, next: T) => void;
  };

  type TPrototype = Pick<
    ObserverLike<T>,
    | typeof FlowControllerLike_isReady
    | typeof FlowControllerLike_addOnReadyListener
  >;

  return mixInstanceFactory(
    include(
      DisposableMixin,
      DisposeOnCompleteSinkMixin(),
      DelegatingSchedulerMixin,
    ),
    function EventListener(
      this: TProperties & TPrototype,
      notify: (this: ObserverLike<T>, a: T) => void,
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(DisposableMixin, this);
      init(DisposeOnCompleteSinkMixin(), this);
      init(DelegatingSchedulerMixin, this, scheduler);

      this[EventListenerLike_notify] = notify;

      return this;
    },
    props<TProperties>({
      [EventListenerLike_notify]: none,
    }),
    proto<TPrototype>({
      [FlowControllerLike_isReady]: true as const,
      [FlowControllerLike_addOnReadyListener]() {
        return Disposable.disposed;
      },
    }),
  );
})();

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(
      DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(),
      DelegatingSchedulerMixin,
    ),
    function NonDisposingDelegatingObserver(
      this: unknown,
      delegate: ObserverLike<T>,
    ): ObserverLike<T> {
      init(
        DelegatingNotifyOnlyNonCompletingNonDisposingConsumer(),
        this,
        delegate,
      );
      init(DelegatingSchedulerMixin, this, delegate);

      return this;
    },
  ))();

export const reducer: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  ref: [TAcc],
  scheduler: SchedulerLike,
) => ObserverLike<T> = /*@__PURE__*/ (<T, TAcc>() => {
  type TPrototype = Pick<
    ObserverLike<T>,
    | typeof FlowControllerLike_isReady
    | typeof FlowControllerLike_addOnReadyListener
  >;

  return mixInstanceFactory(
    include(ReducerSinkMixin(), DelegatingSchedulerMixin),
    function CollectObserver(
      this: TPrototype,
      reducer: Reducer<T, TAcc>,
      ref: [TAcc],
      scheduler: SchedulerLike,
    ): ObserverLike<T> {
      init(ReducerSinkMixin<T, TAcc>(), this, reducer, ref);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
    props(),
    proto<TPrototype>({
      [FlowControllerLike_isReady]: true as const,
      [FlowControllerLike_addOnReadyListener]() {
        return Disposable.disposed;
      },
    }),
  );
})();

export const takeLast: <T>(
  capacity: number,
  scheduler: SchedulerLike,
) => ObserverLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(TakeLastConsumerMixin(), DelegatingSchedulerMixin),
    function TakeLastObserver(
      this: unknown,
      capacity: number,
      scheduler: SchedulerLike,
    ): ObserverLike<T> & CollectionEnumeratorLike<T> {
      init(TakeLastConsumerMixin<T>(), this, capacity);
      init(DelegatingSchedulerMixin, this, scheduler);

      return this;
    },
  ))();
