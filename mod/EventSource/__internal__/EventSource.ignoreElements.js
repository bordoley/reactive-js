/// <reference types="./EventSource.ignoreElements.d.ts" />

import { alwaysFalse } from "../../functions.js";
import EventSource_keep from "./EventSource.keep.js";
const EventSource_ignoreElements = () => EventSource_keep(alwaysFalse);
export default EventSource_ignoreElements;
