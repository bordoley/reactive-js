import { EventSourceLike } from "../computations.js";
import { Function1, Optional } from "../functions.js";
import { DisposableLike, SchedulerLike } from "../utils.js";
export interface Signature {
    lastAsync<T>(options?: {
        scheduler: SchedulerLike;
    }): Function1<EventSourceLike<T>, Promise<Optional<T>>>;
    subscribe<T>(options?: {
        scheduler: SchedulerLike;
    }): Function1<EventSourceLike<T>, DisposableLike>;
    toReadonlyArrayAsync<T>(options?: {
        scheduler: SchedulerLike;
    }): Function1<EventSourceLike<T>, Promise<ReadonlyArray<T>>>;
}
export declare const lastAsync: Signature["lastAsync"];
export declare const subscribe: Signature["subscribe"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
