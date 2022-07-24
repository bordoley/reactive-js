import { PauseableLike } from "../util/PauseableLike.mjs";
import { Function1 } from "../util/functions.mjs";
import { SchedulerLike } from "./SchedulerLike.mjs";
interface PauseableSchedulerLike extends PauseableLike, SchedulerLike {
}
declare const create: Function1<SchedulerLike, PauseableSchedulerLike>;
export { PauseableSchedulerLike, create };
