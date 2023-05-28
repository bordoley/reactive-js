/// <reference types="./EventSource.mapWithKey.d.ts" />

import { none, pipe, tuple } from "../../functions.js";
import EventSource_map from "./EventSource.map.js";
import EventSource_scan from "./EventSource.scan.js";
const EventSource_mapWithKey = ((mapper) => (obs) => pipe(obs, EventSource_scan(([cnt, _], next) => tuple(cnt + 1, next), () => tuple(-1, none)), EventSource_map(([cnt, v]) => mapper(v, cnt))));
export default EventSource_mapWithKey;
