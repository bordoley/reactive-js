/// <reference types="./EventSource.fromFactory.d.ts" />

import { compose } from "../../functions.js";
import EventSource_fromValue from "./EventSource.fromValue.js";
import EventSource_map from "./EventSource.map.js";
const EventSource_fromFactory = (() => compose(EventSource_fromValue(), EventSource_map((f) => f())));
export default EventSource_fromFactory;
