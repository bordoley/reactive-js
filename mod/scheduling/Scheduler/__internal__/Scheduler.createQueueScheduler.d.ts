import { QueueTask_continuation, QueueTask_dueTime, QueueTask_priority, QueueTask_taskID } from "../../../__internal__/symbols.js";
import { QueueLike } from "../../../__internal__/util.internal.js";
import { Function2 } from "../../../functions.js";
import { PauseableSchedulerLike, PrioritySchedulerLike, SchedulerLike } from "../../../scheduling.js";
import { ContinuationLike } from "./Scheduler.mixin.js";
export type QueueTask = {
    readonly [QueueTask_continuation]: ContinuationLike;
    [QueueTask_dueTime]: number;
    readonly [QueueTask_priority]: number;
    [QueueTask_taskID]: number;
};
declare const Scheduler_createQueueScheduler: Function2<SchedulerLike, () => QueueLike<QueueTask>, PauseableSchedulerLike & PrioritySchedulerLike>;
export default Scheduler_createQueueScheduler;
