import type * as EventSource from "../../EventSource.js";
import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
import ReadonlyArray_toEventSource from "../../ReadonlyArray/__internal__/ReadonlyArray.toEventSource.js";
import { compose } from "../../functions.js";

const EventSource_fromValue: EventSource.Signature["fromValue"] = () =>
  compose(ReadonlyArray_fromValue(), ReadonlyArray_toEventSource());

export default EventSource_fromValue;
