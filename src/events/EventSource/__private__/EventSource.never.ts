import type * as EventSource from "../../../events/EventSource.js";
import { ignore, returns } from "../../../functions.js";
import EventSource_create from "./EventSource.create.js";

const neverInstance = /*@__PURE__*/ EventSource_create(ignore);
const EventSource_never: EventSource.Signature["never"] = /*@__PURE__*/ returns(
  neverInstance,
) as EventSource.Signature["never"];

export default EventSource_never;
