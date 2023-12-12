import { PauseableSchedulerLike, SchedulerLike } from "../concurrent.js";
interface Signature {
    create(hostScheduler: SchedulerLike): PauseableSchedulerLike;
}
export declare const create: Signature["create"];
export {};
