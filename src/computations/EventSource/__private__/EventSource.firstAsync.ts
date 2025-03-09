import { EventSourceLike } from "../../../computations.js";
import { none, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

const EventSource_firstAsync: EventSource.Signature["firstAsync"] =
  /*@__PURE__*/ returns(async (eventSource: EventSourceLike) => {
    let result: unknown = none;
    const subscription = pipe(
      eventSource,
      EventSource_addEventHandler(v => {
        result = v;
        subscription[DisposableLike_dispose]();
      }),
    );

    await DisposableContainer.toPromise(subscription);

    return result;
  }) as EventSource.Signature["firstAsync"];
export default EventSource_firstAsync;
