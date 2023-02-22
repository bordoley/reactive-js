/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import { compose } from "../../../functions.js";
import Pauseable_pause from "../../Pauseable/__internal__/Pauseable.pause.js";
import { create as createQueueScheduler } from "../../__internal__/QueueScheduler.js";
const Scheduler_toPausableScheduler = /*@__PURE__*/ compose(createQueueScheduler, Pauseable_pause);
export default Scheduler_toPausableScheduler;
