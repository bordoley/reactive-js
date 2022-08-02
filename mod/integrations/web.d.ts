import { Updater, Function1 } from "../functions.mjs";
import { ObservableLike } from "../rx.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { StreamLike, StreamableLike } from "../streaming.mjs";
interface WindowLocationURI {
    title: string;
    path: string;
    query: string;
    fragment: string;
}
interface WindowLocationStreamLike extends StreamLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI> {
    dispatch(this: WindowLocationStreamLike, stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI, options?: {
        readonly replace?: boolean;
    }): void;
    goBack(this: WindowLocationStreamLike): boolean;
}
interface WindowLocationStreamableLike extends StreamableLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI, WindowLocationStreamLike> {
    stream(this: WindowLocationStreamableLike, scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): WindowLocationStreamLike;
}
declare type FetchRequest = RequestInit & {
    uri: string;
};
declare const createEventSource: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => ObservableLike<{
    readonly id: string;
    readonly type: string;
    readonly data: string;
}>;
declare const fetch: <T>(onResponse: Function1<Response, Promise<T> | ObservableLike<T>>) => Function1<string | FetchRequest, ObservableLike<T>>;
declare const fromEvent: <T>(target: EventTarget, eventName: string, selector: Function1<Event, T>) => ObservableLike<T>;
export { FetchRequest, WindowLocationStreamLike, WindowLocationStreamableLike, WindowLocationURI, createEventSource, fetch, fromEvent };
