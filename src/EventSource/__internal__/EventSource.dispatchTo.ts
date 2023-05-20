import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import type * as EventSource from "../../EventSource.js";
import { bindMethod, invoke, pipe } from "../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_complete,
  EventListenerLike,
  EventSourceLike,
  EventSourceLike_addEventListener,
} from "../../types.js";
import EventSource_create from "./EventSource.create.js";
import EventSource_enqueue from "./EventSource.enqueue.js";

const EventSource_dispatchTo: EventSource.Signature["dispatchTo"] =
  <T>(dispatcher: DispatcherLike<T>) =>
  (eventSource: EventSourceLike<T>) =>
    EventSource_create((listener: EventListenerLike<T>) => {
      pipe(
        listener,
        Disposable_onComplete(bindMethod(dispatcher, DispatcherLike_complete)),
      );

      pipe(
        eventSource,
        EventSource_enqueue(dispatcher),
        invoke(EventSourceLike_addEventListener, listener),
      );
    });

export default EventSource_dispatchTo;
