import { Array_push } from "../../../__internal__/constants.js";
import { EventSourceLike } from "../../../computations.js";
import { bindMethod, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

const EventSource_toReadonlyArrayAsync: EventSource.Signature["toReadonlyArrayAsync"] =
  /*@__PURE__*/ returns(async (eventSource: EventSourceLike) => {
    const result: unknown[] = [];
    const subscription = pipe(
      eventSource,
      EventSource_addEventHandler(bindMethod(result, Array_push)),
    );

    await DisposableContainer.toPromise(subscription);

    return result;
  }) as EventSource.Signature["toReadonlyArrayAsync"];
export default EventSource_toReadonlyArrayAsync;
