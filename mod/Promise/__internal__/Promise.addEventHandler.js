/// <reference types="./Promise.addEventHandler.d.ts" />

import EventSource_addEventHandler from "../../EventSource/__internal__/EventSource.addEventHandler.js";
import { compose } from "../../functions.js";
import Promise_toEventSource from "./Promise.toEventSource.js";
const Promise_addEventHandler = (handler) => compose(Promise_toEventSource(), EventSource_addEventHandler(handler));
export default Promise_addEventHandler;
