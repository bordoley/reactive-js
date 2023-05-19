import { SideEffect1 } from "./functions.js";
import { Container, ContainerTypeClass, Container_T, Container_type, EventListenerLike, EventPublisherLike, EventSourceLike, MulticastableTypeClass } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface EventSourceContainer extends Container {
    readonly [Container_type]?: EventSourceLike<this[typeof Container_T]>;
}
export type Type = EventSourceContainer;
export interface EventSourceModule extends ContainerTypeClass<Type>, MulticastableTypeClass<Type> {
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
    merge<T>(fst: EventSourceLike<T>, snd: EventSourceLike<T>, ...tail: readonly EventSourceLike<T>[]): EventSourceLike<T>;
    mergeMany<T>(eventSources: readonly EventSourceLike<T>[]): EventSourceLike<T>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const buffer: Signature["buffer"];
export declare const create: Signature["create"];
export declare const createPublisher: Signature["createPublisher"];
export declare const createRefCountedPublisher: Signature["createRefCountedPublisher"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const forEach: Signature["forEach"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const merge: Signature["merge"];
export declare const mergeMany: Signature["mergeMany"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
