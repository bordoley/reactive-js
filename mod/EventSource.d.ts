import { SideEffect1 } from "./functions.js";
import { Container_T, Container_type, EventListenerLike, EventPublisherLike, EventSourceContainerModule, EventSourceLike, IndexedContainer, ReactiveContainerModule } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface EventSourceContainer extends IndexedContainer {
    readonly [Container_type]?: EventSourceLike<this[typeof Container_T]>;
}
export type Type = EventSourceContainer;
/**
 * @noInheritDoc
 * @category Module
 */
export interface EventSourceModule extends EventSourceContainerModule<Type>, ReactiveContainerModule<Type> {
    /**
     * @category Constructor
     */
    create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;
    /**
     * @category Constructor
     */
    createPublisher<T>(): EventPublisherLike<T>;
    /**
     * @category Constructor
     */
    createRefCountedPublisher<T>(): EventPublisherLike<T>;
    /**
     * @category Constructor
     */
    merge<T>(fst: EventSourceLike<T>, snd: EventSourceLike<T>, ...tail: readonly EventSourceLike<T>[]): EventSourceLike<T>;
    /**
     * @category Constructor
     */
    mergeMany<T>(eventSources: readonly EventSourceLike<T>[]): EventSourceLike<T>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const buffer: Signature["buffer"];
export declare const create: Signature["create"];
export declare const createPublisher: Signature["createPublisher"];
export declare const createRefCountedPublisher: Signature["createRefCountedPublisher"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeMany: Signature["mergeMany"];
export declare const pairwise: Signature["pairwise"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
