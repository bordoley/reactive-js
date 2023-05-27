/// <reference types="./Promise.toObservable.d.ts" />

import EventSource_toObservable from "../../EventSource/__internal__/EventSource.toObservable.js";
import { compose } from "../../functions.js";
import Promise_toEventSource from "./Promise.toEventSource.js";
const Promise_toObservable = () => compose(Promise_toEventSource(), EventSource_toObservable());
export default Promise_toObservable;
