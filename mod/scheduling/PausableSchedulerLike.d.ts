import { PauseableLike } from '../util/PauseableLike.js';
import { Function1 } from '../util/functions.js';
import { SchedulerLike } from "./SchedulerLike.mjs";
interface PauseableSchedulerLike extends PauseableLike, SchedulerLike {
}
declare const create: Function1<SchedulerLike, PauseableSchedulerLike>;
export { PauseableSchedulerLike, create };
