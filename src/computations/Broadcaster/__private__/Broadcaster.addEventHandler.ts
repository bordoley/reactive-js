import {
  BroadcasterLike,
  EventSourceLike_subscribe,
} from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";

import type * as Broadcaster from "../../Broadcaster.js";

const Broadcaster_addEventHandler: Broadcaster.Signature["addEventHandler"] =
  <T>(handler: SideEffect1<T>) =>
  (source: BroadcasterLike<T>) => {
    const eventListener = EventListener.create<T>(handler);
    source[EventSourceLike_subscribe](eventListener);
    return eventListener;
  };

export default Broadcaster_addEventHandler;
