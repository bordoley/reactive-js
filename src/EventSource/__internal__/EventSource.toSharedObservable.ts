import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import type * as EventSource from "../../EventSource.js";
import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { bindMethod, pipe } from "../../functions.js";
import {
  DispatcherLike_complete,
  EventSourceLike,
  QueueableLike_enqueue,
} from "../../types.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

const EventSource_toSharedObservable: EventSource.Signature["toSharedObservable"] =

    <T>() =>
    (eventSource: EventSourceLike<T>) =>
      SharedObservable_create<T>(observer => {
        pipe(
          eventSource,
          EventSource_addEventHandler(
            bindMethod(observer, QueueableLike_enqueue),
          ),
          Disposable_onComplete(bindMethod(observer, DispatcherLike_complete)),
          Disposable_addTo(observer),
        );
      });

export default EventSource_toSharedObservable;
