import { Updater, Function1 } from "../functions.js";
import { ObservableLike } from "../rx.js";
import { DispatcherLike_dispatch, SchedulerLike } from "../scheduling.js";
import { StreamLike, StreamableLike, StreamableLike_stream } from "../streaming.js";
type WindowLocationURI = {
    title: string;
    path: string;
    query: string;
    fragment: string;
};
/** @ignore */
declare const WindowLocationStreamLike_goBack: unique symbol;
interface WindowLocationStreamLike extends StreamLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI> {
    [DispatcherLike_dispatch](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI, options?: {
        readonly replace?: boolean;
    }): void;
    [WindowLocationStreamLike_goBack](): boolean;
}
interface WindowLocationStreamableLike extends StreamableLike<Updater<WindowLocationURI> | WindowLocationURI, WindowLocationURI, WindowLocationStreamLike> {
    [StreamableLike_stream](scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): WindowLocationStreamLike;
}
type FetchRequest = RequestInit & {
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
export { FetchRequest, WindowLocationStreamLike, WindowLocationStreamLike_goBack, WindowLocationStreamableLike, WindowLocationURI, addEventListener, createEventSource, fetch, windowLocation };
