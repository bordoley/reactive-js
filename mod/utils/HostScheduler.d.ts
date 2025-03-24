import { DisposableLike, SchedulerLike } from "../utils.js";
interface Signature {
    create(): SchedulerLike & DisposableLike;
}
export declare const create: Signature["create"];
export {};
