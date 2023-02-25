/// <reference types="./Pauseable.pause.d.ts" />

import { pipe, returns } from "../../../functions.js";
import { PauseableState_paused } from "../../../scheduling.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";
const Pauseable_pause = (pauseable) => pipe(pauseable, Queue_push(returns(PauseableState_paused)));
export default Pauseable_pause;
