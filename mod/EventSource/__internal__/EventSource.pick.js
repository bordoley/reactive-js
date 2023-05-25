/// <reference types="./EventSource.pick.d.ts" />

import { pickUnsafe } from "../../functions.js";
import EventSource_map from "./EventSource.map.js";
const EventSource_pick = (...keys) => EventSource_map(pickUnsafe(...keys));
export default EventSource_pick;
