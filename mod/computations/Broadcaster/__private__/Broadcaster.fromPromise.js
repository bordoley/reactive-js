/// <reference types="./Broadcaster.fromPromise.d.ts" />

import { error } from "../../../functions.js";
import { DisposableLike_dispose, EventListenerLike_notify, } from "../../../utils.js";
import Broadcaster_create from "./Broadcaster.create.js";
const Broadcaster_fromPromise = (options) => (promise) => Broadcaster_create(async (listener) => {
    try {
        const result = await promise;
        listener[EventListenerLike_notify](result);
        listener[DisposableLike_dispose]();
    }
    catch (e) {
        listener[DisposableLike_dispose](error(e));
    }
}, options);
export default Broadcaster_fromPromise;
