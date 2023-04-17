/// <reference types="./EventSource.pick.d.ts" />

import EventSource_map from "./EventSource.map.js";
const EventSource_pick = (...keys) => EventSource_map((value) => {
    let result = value;
    for (const key of keys) {
        result = result[key];
    }
    return result;
});
export default EventSource_pick;
