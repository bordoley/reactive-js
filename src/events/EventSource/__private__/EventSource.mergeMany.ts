import { Array_length } from "../../../__internal__/constants.js";
import { EventListenerLike_notify, EventSourceLike } from "../../../events.js";
import { bindMethod, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import type * as EventSource from "../../EventSource.js";

import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_mergeMany: EventSource.Signature["mergeMany"] = <T>(
  eventSources: readonly EventSourceLike<T>[],
): EventSourceLike<T> =>
  EventSource_create(listener => {
    const count = eventSources[Array_length];
    let completed = 0;

    const eventHandler = bindMethod(listener, EventListenerLike_notify);

    for (const eventSource of eventSources) {
      pipe(
        eventSource,
        EventSource_addEventHandler(eventHandler),
        Disposable.addTo(listener),
        Disposable.onComplete(() => {
          completed++;
          if (completed >= count) {
            listener[DisposableLike_dispose]();
          }
        }),
      );
    }
  });

export default EventSource_mergeMany;
