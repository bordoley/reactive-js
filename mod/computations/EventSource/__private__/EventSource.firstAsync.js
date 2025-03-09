/// <reference types="./EventSource.firstAsync.d.ts" />

import { none, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import { DisposableLike_dispose } from "../../../utils.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
const EventSource_firstAsync = 
/*@__PURE__*/ returns(async (eventSource) => {
    let result = none;
    const subscription = pipe(eventSource, EventSource_addEventHandler(v => {
        result = v;
        subscription[DisposableLike_dispose]();
    }));
    await DisposableContainer.toPromise(subscription);
    return result;
});
export default EventSource_firstAsync;
