import { Equality, Factory, Function1, Predicate, Reducer, SideEffect1, Tuple2 } from "../functions.js";
import { EventListenerLike, EventSourceLike } from "../rx.js";
import { DisposableLike } from "../utils.js";
export interface EventSourceModule {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike>;
    buffer<T>(options?: {
        count?: number;
    }): Function1<EventSourceLike<T>, EventSourceLike<readonly T[]>>;
    create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): Function1<EventSourceLike<T>, EventSourceLike<T>>;
    keep<T>(predicate: Predicate<T>): Function1<EventSourceLike<T>, EventSourceLike<T>>;
    map<TA, TB>(selector: Function1<TA, TB>): Function1<EventSourceLike<TA>, EventSourceLike<TB>>;
    merge<T>(fst: EventSourceLike<T>, snd: EventSourceLike<T>, ...tail: readonly EventSourceLike<T>[]): EventSourceLike<T>;
    mergeMany<T>(eventSources: readonly EventSourceLike<T>[]): EventSourceLike<T>;
    mergeWith<T>(snd: EventSourceLike<T>, ...tail: readonly EventSourceLike<T>[]): Function1<EventSourceLike<T>, EventSourceLike<T>>;
    pairwise<T>(): Function1<EventSourceLike<T>, EventSourceLike<Tuple2<T, T>>>;
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<EventSourceLike<T>, EventSourceLike<TAcc>>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): Function1<EventSourceLike<T>, EventSourceLike<T>>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): Function1<EventSourceLike<T>, EventSourceLike<T>>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): Function1<EventSourceLike<T>, EventSourceLike<T>>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const buffer: Signature["buffer"];
export declare const create: Signature["create"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeMany: Signature["mergeMany"];
export declare const mergeWith: Signature["mergeWith"];
export declare const pairwise: Signature["pairwise"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
