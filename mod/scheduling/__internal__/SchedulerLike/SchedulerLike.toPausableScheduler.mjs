/// <reference types="./SchedulerLike.toPausableScheduler.d.ts" />
import { compose } from '../../../functions.mjs';
import { pause } from '../../../util/PauseableLike.mjs';
import { create } from '../QueueSchedulerLike.mjs';

const toPausableScheduler = 
/*@__PURE__*/ compose(create, pause);

export { toPausableScheduler as default };
