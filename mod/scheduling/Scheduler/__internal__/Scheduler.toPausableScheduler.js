/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import { compose } from "../../../functions.js";
import Pauseable_pause from "../../Pauseable/__internal__/Pauseable.pause.js";
import { create as createQueueScheduler } from "../../__internal__/QueueScheduler.js";
const Scheduler_toPausableScheduler = /*@__PURE__*/ compose(createQueueScheduler, scheduler => (Pauseable_pause(scheduler), scheduler));
export default Scheduler_toPausableScheduler;
