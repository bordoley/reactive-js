/// <reference types="./EventSource.merge.d.ts" />

import EventSource_mergeMany from "./EventSource.mergeMany.js";
const EventSource_merge = (...EventSources) => EventSource_mergeMany(EventSources);
export default EventSource_merge;
