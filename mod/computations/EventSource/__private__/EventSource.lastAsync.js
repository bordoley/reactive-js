/// <reference types="./EventSource.lastAsync.d.ts" />

import { none, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
const EventSource_lastAsync = 
/*@__PURE__*/ returns(async (eventSource) => {
    let result = none;
    const subscription = pipe(eventSource, EventSource_addEventHandler(v => {
        result = v;
    }));
    await DisposableContainer.toPromise(subscription);
    return result;
});
export default EventSource_lastAsync;
