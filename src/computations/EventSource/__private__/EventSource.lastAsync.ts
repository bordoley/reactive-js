import { EventSourceLike } from "../../../computations.js";
import { none, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

const EventSource_lastAsync: EventSource.Signature["lastAsync"] =
  /*@__PURE__*/ returns(async (eventSource: EventSourceLike) => {
    let result: unknown = none;
    const subscription = pipe(
      eventSource,
      EventSource_addEventHandler(v => {
        result = v;
      }),
    );

    await DisposableContainer.toPromise(subscription);

    return result;
  }) as EventSource.Signature["lastAsync"];
export default EventSource_lastAsync;
