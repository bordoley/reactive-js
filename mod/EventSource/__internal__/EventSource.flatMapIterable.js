/// <reference types="./EventSource.flatMapIterable.d.ts" />

import { compose } from "../../functions.js";
import EventSource_flattenIterable from "./EventSource.flattenIterable.js";
import EventSource_map from "./EventSource.map.js";
const EventSource_flatMapIterable = (selector) => compose(EventSource_map(selector), EventSource_flattenIterable());
export default EventSource_flatMapIterable;
