import { SchedulerLike } from "../concurrent.js";
import { DisposableLike } from "../utils.js";
interface Signature {
    create(): SchedulerLike & DisposableLike;
    get(): SchedulerLike;
    setMaxYieldInterval(maxYieldInterval: number): void;
}
export declare const create: Signature["create"];
export declare const get: Signature["get"];
export declare const setMaxYieldInterval: Signature["setMaxYieldInterval"];
export {};
