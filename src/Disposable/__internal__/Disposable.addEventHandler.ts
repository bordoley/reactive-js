import EventSource_addEventHandler from "../../EventSource/__internal__/EventSource.addEventHandler.js";
import type * as Disposable from "../../Disposable.js";
import { SideEffect1, compose } from "../../functions.js";
import Disposable_toEventSource from "./Disposable.toEventSource.js";

const Disposable_addEventHandler: Disposable.Signature["addEventHandler"] = <T>(
  handler: SideEffect1<T>,
) => compose(Disposable_toEventSource<T>(), EventSource_addEventHandler(handler));

export default Disposable_addEventHandler;
