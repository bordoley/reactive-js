/// <reference types="./EventSource.fromOptional.d.ts" />

import ReadonlyArray_fromOptional from "../../ReadonlyArray/__internal__/ReadonlyArray.fromOptional.js";
import ReadonlyArray_toEventSource from "../../ReadonlyArray/__internal__/ReadonlyArray.toEventSource.js";
import { compose } from "../../functions.js";
const EventSource_fromOptional = () => compose(ReadonlyArray_fromOptional(), ReadonlyArray_toEventSource());
export default EventSource_fromOptional;
