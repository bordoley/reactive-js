/// <reference types="./Pauseable.pause.d.ts" />

import { returns } from "../../../functions.js";
import { PauseableState_paused } from "../../../scheduling.js";
import { QueueLike_push } from "../../../util.js";
const Pauseable_pause = (pauseable) => pauseable[QueueLike_push](returns(PauseableState_paused));
export default Pauseable_pause;
