/// <reference types="./Pauseable.pause.d.ts" />

import { pipe, returns } from "../../../functions.js";
import { PauseableState_paused } from "../../../scheduling.js";
import Queueable_push from "../../../util/Queueable/__internal__/Queueable.push.js";
const Pauseable_pause = (pauseable) => pipe(pauseable, Queueable_push(returns(PauseableState_paused)));
export default Pauseable_pause;
