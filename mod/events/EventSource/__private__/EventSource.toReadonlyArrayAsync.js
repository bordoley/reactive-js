/// <reference types="./EventSource.toReadonlyArrayAsync.d.ts" />

import { bind, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import EventSource_addEventHandler from "./EventSource.addEventHandler.js";
const EventSource_toReadonlyArrayAsync = () => (src) => new Promise((resolve, reject) => {
    const result = [];
    pipe(src, EventSource_addEventHandler(bind(Array.prototype.push, result)), Disposable.onComplete(() => resolve(result)), Disposable.onError(reject));
});
export default EventSource_toReadonlyArrayAsync;
