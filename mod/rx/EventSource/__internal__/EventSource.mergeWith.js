/// <reference types="./EventSource.mergeWith.d.ts" />

import EventSource_mergeMany from "./EventSource.mergeMany.js";
const EventSource_mergeWith = (snd, ...tail) => (fst) => EventSource_mergeMany([fst, snd, ...tail]);
export default EventSource_mergeWith;
