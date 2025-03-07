/// <reference types="./EventSource.zipLatest.d.ts" />

import EventSource_latest from "./EventSource.latest.js";
const EventSource_zipLatest = ((...observables) => EventSource_latest(observables, 2));
export default EventSource_zipLatest;
