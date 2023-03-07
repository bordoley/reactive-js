/// <reference types="./Pauseable.resume.d.ts" />

import { returns } from "../../../functions.js";
import { PauseableState_running } from "../../../scheduling.js";
import { QueueLike_push } from "../../../util.js";
const Pauseable_resume = (pauseable) => pauseable[QueueLike_push](returns(PauseableState_running));
export default Pauseable_resume;
