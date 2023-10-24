import { DispatcherLike_complete } from "../../../concurrent.js";
import { EventSourceLike } from "../../../events.js";
import * as EventSource from "../../../events/EventSource.js";
import { bindMethod, pipe } from "../../../functions.js";
import { QueueableLike_enqueue } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as Observable from "../../Observable.js";
import Observable_createMulticast from "./Observable.createMulticast.js";

const Observable_fromEventSource: Observable.Signature["fromEventSource"] =
  <T>() =>
  (eventSource: EventSourceLike<T>) =>
    Observable_createMulticast<T>(observer => {
      pipe(
        eventSource,
        EventSource.addEventHandler(
          bindMethod(observer, QueueableLike_enqueue),
        ),
        Disposable.onComplete(bindMethod(observer, DispatcherLike_complete)),
        Disposable.addTo(observer),
      );
    });

export default Observable_fromEventSource;
