/// <reference types="./Scheduler.toPausableScheduler.d.ts" />
import { compose } from '../../../functions.mjs';
import Pauseable_pause from '../../../util/__internal__/Pauseable/Pauseable.pause.mjs';
import { create } from '../QueueScheduler.mjs';

const Scheduler_toPausableScheduler = /*@__PURE__*/ compose(create, Pauseable_pause);

export { Scheduler_toPausableScheduler as default };
