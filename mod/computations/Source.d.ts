import { SourceLike } from "../computations.js";
import { Function1, Optional } from "../functions.js";
import { DisposableLike, ObserverLike, SchedulerLike } from "../utils.js";
export interface Signature {
    lastAsync<T>(options?: {
        scheduler: SchedulerLike;
    }): Function1<SourceLike<T, ObserverLike>, Promise<Optional<T>>>;
    subscribe<T>(options?: {
        scheduler: SchedulerLike;
    }): Function1<SourceLike<T, ObserverLike>, DisposableLike>;
    toReadonlyArrayAsync<T>(options?: {
        scheduler: SchedulerLike;
    }): Function1<SourceLike<T, ObserverLike>, Promise<ReadonlyArray<T>>>;
}
export declare const lastAsync: Signature["lastAsync"];
export declare const subscribe: Signature["subscribe"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
