import { Function1, SideEffect1 } from "./functions.js";
import { ContainerTypeClass } from "./type-classes.js";
import { ContainerOperator, DisposableLike, EventListenerLike, EventPublisherLike, EventSourceContainer, EventSourceLike, SharedObservableLike } from "./types.js";
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
    toObservable<T>(): Function1<EventSourceLike<T>, SharedObservableLike<T>>;
}
export type Signature = EventSourceModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const create: Signature["create"];
export declare const createPublisher: Signature["createPublisher"];
export declare const createRefCountedPublisher: Signature["createRefCountedPublisher"];
export declare const forEach: Signature["forEach"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pick: Signature["pick"];
export declare const toObservable: Signature["toObservable"];
