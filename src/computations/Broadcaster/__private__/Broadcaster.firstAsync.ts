import { BroadcasterLike } from "../../../computations.js";
import { compose, identity, returns } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Broadcaster_lastAsync from "./Broadcaster.lastAsync.js";
import Broadcaster_takeFirst from "./Broadcaster.takeFirst.js";

const Broadcaster_firstAsync: Broadcaster.Signature["firstAsync"] = (<T>() =>
  returns(
    compose(
      identity<BroadcasterLike<T>>,
      Broadcaster_takeFirst(),
      Broadcaster_lastAsync<T>(),
    ),
  ))() as Broadcaster.Signature["firstAsync"];
export default Broadcaster_firstAsync;
