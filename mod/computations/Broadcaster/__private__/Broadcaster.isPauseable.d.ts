import { BroadcasterLike } from "../../../computations.js";
import { PauseableLike } from "../../../utils.js";
declare const Broadcaster_isPauseable: <T>(broadcaster: BroadcasterLike<T>) => broadcaster is BroadcasterLike<T> & PauseableLike;
export default Broadcaster_isPauseable;
