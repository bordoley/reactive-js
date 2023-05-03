import { Container } from "../containers.js";
import { Function1, SideEffect1 } from "../functions.js";
import { Reactive } from "../rx.js";
import { DisposableLike, EventSourceContainer, EventSourceLike } from "../util.js";
export declare const addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
/**
 * @category Constructor
 */
export declare const create: <T>(setup: SideEffect1<import("../util.js").EventListenerLike<T>>) => EventSourceLike<T>;
export declare const empty: Container.Empty<EventSourceContainer>["empty"];
export declare const forEach: Container.ForEach<EventSourceContainer>["forEach"];
export declare const ignoreElements: Container.IgnoreElements<EventSourceContainer>["ignoreElements"];
export declare const keep: Container.Keep<EventSourceContainer>["keep"];
export declare const map: Container.Map<EventSourceContainer>["map"];
export declare const pick: Container.Pick<EventSourceContainer>["pick"];
export declare const toObservable: Reactive.ToObservable<EventSourceContainer>["toObservable"];
