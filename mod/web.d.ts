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
declare type FetchRequest = RequestInit & {
    uri: string;
};
declare const fetch: <T>(onResponse: Function1<Response, Promise<T> | ObservableLike<T>>) => Function1<string | FetchRequest, ObservableLike<T>>;
declare type WindowLocationURI = {
    title: string;
    path: string;
    query: string;
    fragment: string;
};
interface WindowLocationStreamLike extends StreamLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI> {
    dispatch(stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI, options?: {
        readonly replace?: boolean;
    }): void;
    goBack(): boolean;
}
interface WindowLocationStreamableLike extends StreamableLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI> {
    stream(scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): WindowLocationStreamLike;
}
export { FetchRequest, WindowLocationStreamLike, WindowLocationStreamableLike, WindowLocationURI, createEventSource, fetch, fromEvent, windowLocation };
