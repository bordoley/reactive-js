/// <reference types="./SchedulerLike.toPausableScheduler.d.ts" />
import { compose } from '../../../functions.mjs';
import PauseableLike__pause from '../../../util/__internal__/PauseableLike/PauseableLike.pause.mjs';
import { create } from '../QueueSchedulerLike.mjs';

const SchedulerLike__toPausableScheduler = /*@__PURE__*/ compose(create, PauseableLike__pause);

export { SchedulerLike__toPausableScheduler as default };
