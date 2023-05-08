import { Container, DisposableLike, EventSourceContainer, EventSourceLike } from "../core.js";
import { Function1, SideEffect1 } from "../functions.js";
export declare const addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
/**
 * @category Constructor
 */
export declare const create: <T>(setup: SideEffect1<import("../core.js").EventListenerLike<T>>) => EventSourceLike<T>;
export declare const forEach: Container.ForEach<EventSourceContainer>["forEach"];
export declare const ignoreElements: Container.IgnoreElements<EventSourceContainer>["ignoreElements"];
export declare const keep: Container.Keep<EventSourceContainer>["keep"];
export declare const map: Container.Map<EventSourceContainer>["map"];
export declare const pick: Container.Pick<EventSourceContainer>["pick"];
export declare const toObservable: Container.ToObservable<EventSourceContainer>["toObservable"];
