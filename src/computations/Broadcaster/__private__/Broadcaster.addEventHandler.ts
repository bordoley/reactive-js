import {
  BroadcasterLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { SideEffect1 } from "../../../functions.js";
import * as Listener from "../../../utils/__internal__/Listener.js";

import type * as Broadcaster from "../../Broadcaster.js";

const Broadcaster_addEventHandler: Broadcaster.Signature["addEventHandler"] =
  <T>(handler: SideEffect1<T>) =>
  (source: BroadcasterLike<T>) => {
    const eventListener = Listener.create<T>(handler);
    source[SourceLike_subscribe](eventListener);
    return eventListener;
  };

export default Broadcaster_addEventHandler;
