/// <reference types="./EventSource.mapTo.d.ts" />

import { returns } from "../../functions.js";
import EventSource_map from "./EventSource.map.js";
const EventSource_mapTo = (v) => EventSource_map(returns(v));
export default EventSource_mapTo;
