/// <reference types="./Broadcaster.addEventHandler.d.ts" />

import { SourceLike_subscribe, } from "../../../computations.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";
const Broadcaster_addEventHandler = (handler) => (source) => {
    const eventEventListener = EventListener.create(handler);
    source[SourceLike_subscribe](eventEventListener);
    return eventEventListener;
};
export default Broadcaster_addEventHandler;
