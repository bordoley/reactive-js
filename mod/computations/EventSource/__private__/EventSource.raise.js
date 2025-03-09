/// <reference types="./EventSource.raise.d.ts" />

import { error, none, raise } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import EventSource_create from "./EventSource.create.js";
const EventSource_raise = (options) => {
    const { raise: factory = raise } = options ?? {};
    return EventSource_create(async (listener) => {
        await Promise.resolve();
        let err = none;
        try {
            err = factory();
        }
        catch (e) {
            err = e;
        }
        listener[DisposableLike_dispose](error(err));
    });
};
export default EventSource_raise;
