import {
  BroadcasterLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
import * as EventListener from "../../../utils/__internal__/EventListener.js";

import type * as Broadcaster from "../../Broadcaster.js";

const Broadcaster_addEventHandler: Broadcaster.Signature["addEventHandler"] =
  <T>(handler: SideEffect1<T>) =>
  (source: BroadcasterLike<T>) => {
    const eventEventListener = EventListener.create<T>(handler);
    source[SourceLike_subscribe](eventEventListener);
    return eventEventListener;
  };

export default Broadcaster_addEventHandler;
