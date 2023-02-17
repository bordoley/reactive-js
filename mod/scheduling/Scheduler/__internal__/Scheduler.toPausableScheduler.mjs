/// <reference types="./Scheduler.toPausableScheduler.d.ts" />
import { compose } from '../../../functions.mjs';
import Pauseable_pause from '../../Pauseable/__internal__/Pauseable.pause.mjs';
import { create } from '../../__internal__/QueueScheduler.mjs';

const Scheduler_toPausableScheduler = /*@__PURE__*/ compose(create, Pauseable_pause);

export { Scheduler_toPausableScheduler as default };
