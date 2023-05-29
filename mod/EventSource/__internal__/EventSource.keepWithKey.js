/// <reference types="./EventSource.keepWithKey.d.ts" />

import { none, pipe, tuple } from "../../functions.js";
import EventSource_keep from "./EventSource.keep.js";
import EventSource_pick from "./EventSource.pick.js";
import EventSource_scan from "./EventSource.scan.js";
const EventSource_keepWithKey = ((predicate) => (obs) => pipe(obs, EventSource_scan(([cnt, _], next) => tuple(cnt + 1, next), () => tuple(-1, none)), EventSource_keep(([cnt, v]) => predicate(v, cnt)), EventSource_pick(1)));
export default EventSource_keepWithKey;
