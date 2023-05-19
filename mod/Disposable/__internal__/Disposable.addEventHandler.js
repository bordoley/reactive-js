/// <reference types="./Disposable.addEventHandler.d.ts" />

import EventSource_addEventHandler from "../../EventSource/__internal__/EventSource.addEventHandler.js";
import { compose } from "../../functions.js";
import Disposable_toEventSource from "./Disposable.toEventSource.js";
const Disposable_addEventHandler = (handler) => compose(Disposable_toEventSource(), EventSource_addEventHandler(handler));
export default Disposable_addEventHandler;
