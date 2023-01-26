/// <reference types="./Scheduler.toPausableScheduler.d.ts" />
import { compose } from '../../../functions.mjs';
import Pauseable$pause from '../../../util/__internal__/Pauseable/Pauseable.pause.mjs';
import { create } from '../QueueScheduler.mjs';

const Scheduler$toPausableScheduler = /*@__PURE__*/ compose(create, Pauseable$pause);

export { Scheduler$toPausableScheduler as default };
