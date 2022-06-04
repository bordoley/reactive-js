import { Function1, Updater } from "./functions.mjs";
import { DisposableLike } from "./disposable.mjs";
import { SchedulerLike } from "./scheduler.mjs";
import { ObservableLike } from "./observable.mjs";
declare const fromEvent: <T>(target: EventTarget, eventName: string, selector: Function1<Event, T>) => ObservableLike<T>;
declare const createEventSource: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => ObservableLike<{
    readonly id: string;
    readonly type: string;
    readonly data: string;
}>;
declare const windowLocationStream: WindowLocationStreamLike;
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
interface WindowLocationStreamLike extends ObservableLike<WindowLocationURI> {
    dispatch(stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI, options?: {
        readonly replace?: boolean;
    }): void;
    goBack(): boolean;
    init(scheduler: SchedulerLike): DisposableLike;
}
export { FetchRequest, WindowLocationStreamLike, WindowLocationURI, createEventSource, fetch, fromEvent, windowLocationStream };
