import EventSource_addEventHandler from "../../EventSource/__internal__/EventSource.addEventHandler.js";
import type * as Promise from "../../Promise.js";
import { SideEffect1, compose } from "../../functions.js";
import Promise_toEventSource from "./Promise.toEventSource.js";

const Promise_addEventHandler: Promise.Signature["addEventHandler"] = <T>(
  handler: SideEffect1<T>,
) => compose(Promise_toEventSource<T>(), EventSource_addEventHandler(handler));

export default Promise_addEventHandler;
