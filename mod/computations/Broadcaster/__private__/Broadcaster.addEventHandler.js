/// <reference types="./Broadcaster.addEventHandler.d.ts" />

import { SourceLike_subscribe, } from "../../../computations.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";
const Broadcaster_addEventHandler = (handler) => (source) => {
    const eventListener = EventListener.create(handler);
    source[SourceLike_subscribe](eventListener);
    return eventListener;
};
export default Broadcaster_addEventHandler;
