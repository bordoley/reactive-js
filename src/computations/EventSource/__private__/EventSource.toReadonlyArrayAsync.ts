import { Array_push } from "../../../__internal__/constants.js";
import { EventSourceLike } from "../../../computations.js";
import { bindMethod, isSome, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_error } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";

const EventSource_toReadonlyArrayAsync: EventSource.Signature["toReadonlyArrayAsync"] =
  /*@__PURE__*/ returns(async (eventSource: EventSourceLike) => {
    const result: unknown[] = [];
    const subscription = pipe(
      eventSource,
      EventSource_addEventHandler(bindMethod(result, Array_push)),
    );

    if (isSome(subscription[DisposableLike_error])) {
      throw subscription[DisposableLike_error];
    }

    await DisposableContainer.toPromise(subscription);

    return result;
  }) as EventSource.Signature["toReadonlyArrayAsync"];
export default EventSource_toReadonlyArrayAsync;
