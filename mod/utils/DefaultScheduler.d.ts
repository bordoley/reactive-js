import { Optional } from "../functions.js";
import { DisposableLike, SchedulerLike } from "../utils.js";
interface Signature {
    get(): SchedulerLike;
    getOrNone(): Optional<SchedulerLike>;
    set(scheduler: SchedulerLike & DisposableLike): void;
    dispose(): void;
}
export declare const set: Signature["set"];
export declare const get: Signature["get"];
export declare const getOrNone: Signature["getOrNone"];
export declare const dispose: Signature["dispose"];
export {};
