import { Function1, Updater } from "./functions.mjs";
import { ObservableLike, StreamLike } from "./observable.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { StreamableLike } from "./streamable.mjs";
declare const fromEvent: <T>(target: EventTarget, eventName: string, selector: Function1<Event, T>) => ObservableLike<T>;
declare const createEventSource: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => ObservableLike<{
    readonly id: string;
    readonly type: string;
    readonly data: string;
}>;
declare const windowLocation: WindowLocationStreamableLike;
declare const fetch: <T>(onResponse: Function1<Response, Promise<T> | ObservableLike<T>>) => Function1<string | FetchRequest, ObservableLike<T>>;
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
    goBack(this: WindowLocationURI): boolean;
}
interface WindowLocationStreamableLike extends StreamableLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI> {
    stream(this: WindowLocationStreamableLike, scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): WindowLocationStreamLike;
}
declare type FetchRequest = RequestInit & {
    uri: string;
};
export { FetchRequest, WindowLocationStreamLike, WindowLocationStreamableLike, WindowLocationURI, createEventSource, fetch, fromEvent, windowLocation };
