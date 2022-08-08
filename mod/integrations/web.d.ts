import { Updater, Function1 } from "../functions.mjs";
import { ObservableLike } from "../rx.mjs";
import { DispatcherLike_dispatch, SchedulerLike } from "../scheduling.mjs";
import { StreamLike, StreamableLike, StreamableLike_stream } from "../streaming.mjs";
interface WindowLocationURI {
    title: string;
    path: string;
    query: string;
    fragment: string;
}
interface WindowLocationStreamLike extends StreamLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI> {
    [DispatcherLike_dispatch](this: WindowLocationStreamLike, stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI, options?: {
        readonly replace?: boolean;
    }): void;
    goBack(this: WindowLocationStreamLike): boolean;
}
interface WindowLocationStreamableLike extends StreamableLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI, WindowLocationStreamLike> {
    [StreamableLike_stream](this: WindowLocationStreamableLike, scheduler: SchedulerLike, options?: {
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
declare const fetch: <T>(onResponse: Function1<Response, Promise<T> | ObservableLike<T>>) => Function1<FetchRequest | string, ObservableLike<T>>;
declare const addEventListener: <T>(eventName: string, selector: Function1<Event, T>) => Function1<EventTarget, ObservableLike<T>>;
declare const windowLocation: WindowLocationStreamableLike;
declare const replaceWindowLocation: (uri: Updater<WindowLocationURI> | WindowLocationURI) => Function1<WindowLocationStreamLike, WindowLocationStreamLike>;
export { FetchRequest, WindowLocationStreamLike, WindowLocationStreamableLike, WindowLocationURI, addEventListener, createEventSource, fetch, replaceWindowLocation, windowLocation };
