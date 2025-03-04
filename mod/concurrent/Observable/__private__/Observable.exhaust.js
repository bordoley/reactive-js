/// <reference types="./Observable.exhaust.d.ts" />

import { DropLatestBackpressureStrategy } from "../../../utils.js";
import Observable_mergeAll from "./Observable.mergeAll.js";
const Observable_exhaust = ((options) => Observable_mergeAll({
    ...(options ?? {}),
    capacity: 0,
    backpressureStrategy: DropLatestBackpressureStrategy,
    concurrency: 1,
}));
export default Observable_exhaust;
