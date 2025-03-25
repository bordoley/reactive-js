import { BroadcasterLike } from "../../../computations.js";
import { isSome } from "../../../functions.js";
import { PauseableLike, PauseableLike_isPaused } from "../../../utils.js";

const Broadcaster_isPauseable = <T>(
  broadcaster: BroadcasterLike<T>,
): broadcaster is BroadcasterLike<T> & PauseableLike =>
  isSome((broadcaster as any)[PauseableLike_isPaused]);

export default Broadcaster_isPauseable;
