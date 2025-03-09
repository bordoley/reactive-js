/// <reference types="./EventSource.reduceAsync.d.ts" />

import { pipe } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
const EventSource_reduceAsync = (reducer, initialValue) => async (eventSource) => {
    let result = initialValue();
    const subscription = pipe(eventSource, EventSource_addEventHandler(v => {
        result = reducer(result, v);
    }));
    await DisposableContainer.toPromise(subscription);
    return result;
};
export default EventSource_reduceAsync;
