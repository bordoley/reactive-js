/// <reference types="./Broadcaster.isPauseable.d.ts" />

import { isSome } from "../../../functions.js";
import { PauseableLike_isPaused } from "../../../utils.js";
const Broadcaster_isPauseable = (broadcaster) => isSome(broadcaster[PauseableLike_isPaused]);
export default Broadcaster_isPauseable;
