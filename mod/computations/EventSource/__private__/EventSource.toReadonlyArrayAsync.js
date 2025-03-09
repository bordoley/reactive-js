/// <reference types="./EventSource.toReadonlyArrayAsync.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { bindMethod, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
const EventSource_toReadonlyArrayAsync = 
/*@__PURE__*/ returns(async (eventSource) => {
    const result = [];
    const subscription = pipe(eventSource, EventSource_addEventHandler(bindMethod(result, Array_push)));
    await DisposableContainer.toPromise(subscription);
    return result;
});
export default EventSource_toReadonlyArrayAsync;
