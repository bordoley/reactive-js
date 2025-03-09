/// <reference types="./EventSource.empty.d.ts" />

import { DisposableLike_dispose } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_empty = () => EventSource_create(async (listener) => {
    await Promise.resolve();
    listener[DisposableLike_dispose]();
});
export default EventSource_empty;
