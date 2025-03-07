import { ignore, returns } from "../../../functions.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const neverInstance = /*@__PURE__*/ EventSource_create(ignore);
const EventSource_never: EventSource.Signature["never"] = /*@__PURE__*/ returns(
  neverInstance,
) as EventSource.Signature["never"];

export default EventSource_never;
