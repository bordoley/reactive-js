/// <reference types="./Pauseable.resume.d.ts" />

import { pipe, returns } from "../../../functions.js";
import { PauseableState_running } from "../../../scheduling.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";
const Pauseable_resume = (pauseable) => pipe(pauseable, Queue_push(returns(PauseableState_running)));
export default Pauseable_resume;
