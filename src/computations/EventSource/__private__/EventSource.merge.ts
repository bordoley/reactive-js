import { Array_length } from "../../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
} from "../../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  EventListenerLike,
  EventListenerLike_notify,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../../computations.js";
import { bindMethod, isSome, none, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import DelegatingDisposableContainerMixin from "../../../utils/__mixins__/DelegatingDisposableContainerMixin.js";
import {
  DisposableContainerLike,
  DisposableLike_dispose,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

const EventSource_merge: EventSource.Signature["merge"] = /*@__PURE__*/ (<
  T,
>() => {
  const MergeEventSource_eventSources = Symbol("MergeEventSource_eventSources");

  type TProperties<T> = {
    [MergeEventSource_eventSources]: readonly EventSourceLike<T>[];
  };

  const isMergeEventSource = <T>(
    observable: EventSourceLike<T>,
  ): observable is EventSourceLike<T> & TProperties<T> =>
    isSome((observable as any)[MergeEventSource_eventSources]);

  const flattenEventSources = <T>(
    observables: readonly EventSourceLike<T>[],
  ): readonly EventSourceLike<T>[] =>
    observables.some(isMergeEventSource)
      ? observables.flatMap(observable =>
          isMergeEventSource(observable)
            ? flattenEventSources(observable[MergeEventSource_eventSources])
            : observable,
        )
      : observables;

  return mixInstanceFactory(
    include(DelegatingDisposableContainerMixin),
    function MergeEventSource(
      instance: TProperties<T> &
        Omit<EventSourceLike<T>, keyof DisposableContainerLike>,
      ...eventSources: readonly EventSourceLike<T>[]
    ): EventSourceLike<T> {
      eventSources = flattenEventSources(eventSources);
      instance[MergeEventSource_eventSources] = eventSources;

      const disposable = Disposable.create();
      init(DelegatingDisposableContainerMixin, instance, disposable);

      const count = eventSources[Array_length];
      let completed = 0;
      for (const eventSource of eventSources) {
        pipe(
          eventSource,
          DisposableContainer.onComplete(() => {
            completed++;
            if (completed >= count) {
              disposable[DisposableLike_dispose]();
            }
          }),
        );
      }

      return instance;
    },
    props<TProperties<T>>({
      [MergeEventSource_eventSources]: none,
    }),
    {
      [ComputationLike_isDeferred]: false as const,
      [ComputationLike_isSynchronous]: false as const,

      [EventSourceLike_addEventListener](
        this: TProperties<T>,
        listener: EventListenerLike<T>,
      ): void {
        const eventSources = this[MergeEventSource_eventSources];
        const count = eventSources[Array_length];
        let completed = 0;

        const eventHandler = bindMethod(listener, EventListenerLike_notify);

        for (const eventSource of eventSources) {
          pipe(
            eventSource,
            EventSource_addEventHandler(eventHandler),
            Disposable.addTo(listener),
            DisposableContainer.onComplete(() => {
              completed++;
              if (completed >= count) {
                listener[DisposableLike_dispose]();
              }
            }),
          );
        }
      },
    },
  );
})() as EventSource.Signature["merge"];

export default EventSource_merge;
