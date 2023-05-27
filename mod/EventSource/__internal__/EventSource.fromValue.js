/// <reference types="./EventSource.fromValue.d.ts" />

import ReadonlyArray_fromValue from "../../ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
import ReadonlyArray_toEventSource from "../../ReadonlyArray/__internal__/ReadonlyArray.toEventSource.js";
import { compose } from "../../functions.js";
const EventSource_fromValue = () => compose(ReadonlyArray_fromValue(), ReadonlyArray_toEventSource());
export default EventSource_fromValue;
