import { EventSourceLike } from "../computations.js";
import { AsyncFunction1, Factory, Function1, Optional, Reducer, SideEffect1 } from "../functions.js";
import { DisposableLike, SchedulerLike } from "../utils.js";
export interface Signature {
    lastAsync<T>(options?: {
        scheduler?: SchedulerLike;
    }): AsyncFunction1<EventSourceLike<T>, Optional<T>>;
    reduceAsync<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: {
        scheduler?: SchedulerLike;
    }): AsyncFunction1<EventSourceLike<T>, TAcc>;
    subscribe<T>(onNotify: SideEffect1<T>, options?: {
        scheduler?: SchedulerLike;
    }): Function1<EventSourceLike<T>, DisposableLike>;
    subscribe<T>(options?: {
        scheduler?: SchedulerLike;
    }): Function1<EventSourceLike<T>, DisposableLike>;
    toReadonlyArrayAsync<T>(options?: {
        scheduler?: SchedulerLike;
    }): AsyncFunction1<EventSourceLike<T>, ReadonlyArray<T>>;
}
export declare const lastAsync: Signature["lastAsync"];
export declare const reduceAsync: Signature["reduceAsync"];
export declare const subscribe: Signature["subscribe"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
