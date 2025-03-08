/// <reference types="./EventSource.toReadonlyArrayAsync.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { bindMethod, isSome, pipe } from "../../../functions.js";
import { DisposableLike_error } from "../../../utils.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
const EventSource_toReadonlyArrayAsync = () => {
    return async (eventSource) => {
        const result = [];
        const subscription = pipe(eventSource, EventSource_addEventHandler(bindMethod(result, Array_push)));
        if (isSome(subscription[DisposableLike_error])) {
            throw subscription[DisposableLike_error];
        }
        return result;
    };
};
export default EventSource_toReadonlyArrayAsync;
