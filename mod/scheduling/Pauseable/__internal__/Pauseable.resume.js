/// <reference types="./Pauseable.resume.d.ts" />

import { pipe, returns } from "../../../functions.js";
import { PauseableState_running } from "../../../scheduling.js";
import Queueable_push from "../../../util/Queueable/__internal__/Queueable.push.js";
const Pauseable_resume = (pauseable) => pipe(pauseable, Queueable_push(returns(PauseableState_running)));
export default Pauseable_resume;
