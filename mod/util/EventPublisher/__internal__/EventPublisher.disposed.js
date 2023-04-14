/// <reference types="./EventPublisher.disposed.d.ts" />

import { returns } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../util.js";
import EventPublisher_create from "./EventPublisher.create.js";
const EventPublisher_disposed = /*@__PURE__*/ (() => {
    const publisher = EventPublisher_create();
    publisher[DisposableLike_dispose]();
    return returns(publisher);
})();
export default EventPublisher_disposed;
