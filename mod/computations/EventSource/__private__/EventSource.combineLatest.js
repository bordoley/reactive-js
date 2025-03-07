/// <reference types="./EventSource.combineLatest.d.ts" />

import EventSource_latest from "./EventSource.latest.js";
const EventSource_combineLatest = ((...observables) => EventSource_latest(observables, 1));
export default EventSource_combineLatest;
