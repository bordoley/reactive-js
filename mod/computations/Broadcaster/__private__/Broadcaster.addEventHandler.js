/// <reference types="./Broadcaster.addEventHandler.d.ts" />

import { EventSourceLike_subscribe, } from "../../../computations.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";
const Broadcaster_addEventHandler = (handler) => (source) => {
    const eventListener = EventListener.create(handler);
    source[EventSourceLike_subscribe](eventListener);
    return eventListener;
};
export default Broadcaster_addEventHandler;
