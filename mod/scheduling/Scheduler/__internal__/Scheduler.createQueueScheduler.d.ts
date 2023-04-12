import { __QueueTask_continuation, __QueueTask_dueTime, __QueueTask_priority, __QueueTask_taskID } from "../../../__internal__/symbols.js";
import { QueueLike } from "../../../__internal__/util.js";
import { Function2 } from "../../../functions.js";
import { PauseableSchedulerLike, PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
import { ContinuationLike } from "./Scheduler.mixin.js";
export type QueueTask = {
    readonly [__QueueTask_continuation]: ContinuationLike;
    [__QueueTask_dueTime]: number;
    readonly [__QueueTask_priority]: number;
    [__QueueTask_taskID]: number;
};
declare const Scheduler_createQueueScheduler: Function2<SchedulerLike, () => QueueLike<QueueTask>, PauseableSchedulerLike & PrioritySchedulerLike>;
export default Scheduler_createQueueScheduler;
