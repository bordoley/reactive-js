import { Function1, SideEffect1 } from "./functions.js";
import { ContainerTypeClass } from "./type-classes.js";
import { ContainerOperator, DisposableLike, EventListenerLike, EventPublisherLike, EventSourceContainer, EventSourceLike, MulticastObservableLike } from "./types.js";
export type Type = EventSourceContainer;
export interface EventSourceModule extends ContainerTypeClass<Type> {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike>;
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
     * @category Operator
     */
    ignoreElements<T>(): ContainerOperator<Type, unknown, T>;
    toObservable<T>(): Function1<EventSourceLike<T>, MulticastObservableLike<T>>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
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
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toObservable: Signature["toObservable"];
